"use client";

import React, { useState, useEffect } from "react";
import Section from "@/components/Section";

interface RSVP {
  id: number;
  name: string;
  attendance: string;
  message: string;
  created_at: string;
}

export default function RsvpSection() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Fetch RSVPs on component mount
  useEffect(() => {
    fetchRsvps();
  }, []);

  const fetchRsvps = async () => {
    try {
      const response = await fetch('/api/rsvp');
      const data = await response.json();
      if (data.success) {
        setRsvps(data.data);
      }
    } catch (error) {
      console.error('Error fetching RSVPs:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !attendance) {
      alert('Nama dan kehadiran harus diisi!');
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
        body: JSON.stringify({ name, attendance, message }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        // Clear form
        setName("");
        setAttendance("");
        setMessage("");
        // Refresh RSVPs
        fetchRsvps();
        // Hide success message after 3 seconds
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        alert('Gagal mengirim RSVP: ' + data.error);
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('Terjadi kesalahan. Silakan coba lagi.');
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
    <Section id="rsvp" bgImage="https://www.veslavia.com/demo/images/rsvpImg2.webp" nextId="gallery" contentClassName="animate-slide-in-left">
      <div className="card-glass p-6 md:p-10">
        <h2 className="title text-center">RSVP & Ucapan</h2>
        
        <form onSubmit={handleSubmit} className="mt-8 grid gap-6 md:grid-cols-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 outline-none focus:ring-2 focus:ring-white/30"
            placeholder="Nama"
            required
          />
          <select
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            className="w-full rounded-xl bg-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30"
            required
          >
            <option value="">Pilih Kehadiran</option>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
            <option value="Masih Ragu">Masih Ragu</option>
          </select>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="md:col-span-2 min-h-28 rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 outline-none focus:ring-2 focus:ring-white/30"
            placeholder="Berikan Ucapan"
          />
          <div className="md:col-span-2 flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? 'Mengirim...' : 'Kirim Ucapan'}
            </button>
            {submitSuccess && (
              <span className="text-sm text-green-300">✓ Ucapan berhasil dikirim!</span>
            )}
          </div>
        </form>

        <div className="mt-10 space-y-6 max-h-96 overflow-y-auto">
          {rsvps.length === 0 ? (
            <p className="text-center opacity-60 py-8">Belum ada ucapan</p>
          ) : (
            rsvps.map((rsvp) => (
              <div key={rsvp.id} className="flex items-start justify-between gap-4 rounded-xl bg-white/5 p-4">
                <div className="flex-1">
                  <p className="font-semibold">{rsvp.name}</p>
                  {rsvp.message && (
                    <p className="opacity-80 mt-1">{rsvp.message}</p>
                  )}
                  <p className="mt-2 text-xs opacity-70">{formatDate(rsvp.created_at)}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs whitespace-nowrap ${
                  rsvp.attendance === 'Hadir' ? 'bg-green-500/20 text-green-300' :
                  rsvp.attendance === 'Tidak Hadir' ? 'bg-red-500/20 text-red-300' :
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


