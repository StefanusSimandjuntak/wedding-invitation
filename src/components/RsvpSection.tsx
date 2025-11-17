"use client";

import React, { useState, useEffect } from "react";
import Select from "react-select";
import Section from "@/components/Section";

interface RSVP {
  id: number;
  name: string;
  attendance: string;
  message: string | null;
  createdAt: string;
}

interface SelectOption {
  value: string;
  label: string;
}

export default function RsvpSection() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<SelectOption | null>(null);
  const [message, setMessage] = useState("");
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const attendanceOptions: SelectOption[] = [
    { value: "Attending", label: "Attending" },
    { value: "Not Attending", label: "Not Attending" },
    { value: "Maybe", label: "Maybe" },
  ];

  // Fetch RSVPs on component mount
  useEffect(() => {
    fetchRsvps();
  }, []);

  const fetchRsvps = async () => {
    try {
      const response = await fetch('/api/rsvp');
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Failed to fetch RSVPs' }));
        console.error('Error fetching RSVPs:', errorData.error);
        return;
      }
      
      const data = await response.json();
      if (data.success) {
        setRsvps(data.data);
      } else {
        console.error('Error fetching RSVPs:', data.error);
      }
    } catch (error) {
      console.error('Error fetching RSVPs:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !attendance) {
      alert('Name and attendance are required!');
      return;
    }

    setLoading(true);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, attendance: attendance.value, message }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        // Clear form
        setName("");
        setAttendance(null);
        setMessage("");
        // Refresh RSVPs
        fetchRsvps();
        // Hide success message after 3 seconds
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        alert('Failed to send RSVP: ' + data.error);
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Section id="rsvp" bgImage="/assets/images/WhatsApp%20Image%202025-11-07%20at%2012.58.37_80443ac7.jpg" nextId="gallery" contentClassName="animate-slide-in-left">
      <div className="card-glass p-6 md:p-10">
        <h2 className="title text-center">RSVP & Wishes</h2>
        
        <form onSubmit={handleSubmit} className="mt-8 grid gap-6 md:grid-cols-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 outline-none focus:ring-2 focus:ring-white/30"
            placeholder="Name"
            required
          />
          <Select
            value={attendance}
            onChange={(option) => setAttendance(option)}
            options={attendanceOptions}
            placeholder="Select Attendance"
            isClearable
            className="react-select-container"
            classNamePrefix="react-select"
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'transparent',
                borderRadius: '0.75rem',
                padding: '0.25rem',
                minHeight: '3rem',
                boxShadow: 'none',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
                '&:focus-within': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
                },
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: 'rgba(23, 23, 23, 0.95)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isSelected
                  ? 'rgba(255, 255, 255, 0.2)'
                  : state.isFocused
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'transparent',
                color: 'white',
                cursor: 'pointer',
                '&:active': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }),
              singleValue: (base) => ({
                ...base,
                color: 'white',
              }),
              placeholder: (base) => ({
                ...base,
                color: 'rgba(255, 255, 255, 0.6)',
              }),
              input: (base) => ({
                ...base,
                color: 'white',
              }),
              dropdownIndicator: (base) => ({
                ...base,
                color: 'rgba(255, 255, 255, 0.6)',
                '&:hover': {
                  color: 'white',
                },
              }),
              clearIndicator: (base) => ({
                ...base,
                color: 'rgba(255, 255, 255, 0.6)',
                '&:hover': {
                  color: 'white',
                },
              }),
            }}
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="md:col-span-2 min-h-28 rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 outline-none focus:ring-2 focus:ring-white/30"
            placeholder="Leave a Message"
          />
          <div className="md:col-span-2 flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {submitSuccess && (
              <span className="text-sm text-green-300">✓ Message sent successfully!</span>
            )}
          </div>
        </form>

        <div className="mt-10 space-y-6 max-h-96 overflow-y-auto">
          {rsvps.length === 0 ? (
            <p className="text-center opacity-60 py-8">No messages yet</p>
          ) : (
            rsvps.map((rsvp) => (
              <div key={rsvp.id} className="flex items-start justify-between gap-4 rounded-xl bg-white/5 p-4">
                <div className="flex-1">
                  <p className="font-semibold">{rsvp.name}</p>
                  {rsvp.message && (
                    <p className="opacity-80 mt-1">{rsvp.message}</p>
                  )}
                  <p className="mt-2 text-xs opacity-70">{formatDate(rsvp.createdAt)}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs whitespace-nowrap ${
                  rsvp.attendance === 'Attending' ? 'bg-green-500/20 text-green-300' :
                  rsvp.attendance === 'Not Attending' ? 'bg-red-500/20 text-red-300' :
                  'bg-yellow-500/20 text-yellow-300'
                }`}>
                  {rsvp.attendance}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </Section>
  );
}


