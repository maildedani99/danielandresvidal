"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactFormModal() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white text-black rounded-xl p-8 max-w-md w-full shadow-xl relative">
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        {status === "success" ? (
          <div className="text-center py-6 px-4">
            <h3 className="text-2xl font-semibold mb-2 text-green-500">¡Gracias por tu mensaje!</h3>
            <p className="text-gray-600 mb-4 text-xl font-semibold">Me pondré en contacto contigo lo antes posible.</p>
            <button
              onClick={() => router.back()}
              className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-[#0d1117] font-semibold py-2 px-6 rounded-full transition"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Contáctame</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded"
              />
              <textarea
                required
                placeholder="Mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border rounded h-32"
              />
              <div className="flex gap-4 justify-center pt-2">
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-300 text-[#0d1117] font-semibold py-2 px-6 rounded-full transition"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Enviando..." : "Enviar"}
                </button>

                <button
                  type="button"
                  onClick={() => router.back()}
                  className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-full transition"
                >
                  Cancelar
                </button>
              </div>
              {status === "error" && (
                <p className="text-red-600 text-sm">Error al enviar. Inténtalo más tarde.</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
