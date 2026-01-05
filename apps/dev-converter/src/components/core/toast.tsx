"use client"

import { CheckCircle, Info, XCircle } from "lucide-react"

import { useEffect, useState } from "react"

type ToastType = "success" | "error" | "info"

interface Toast {
  id: string
  message: string
  type: ToastType
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (message: string, type: ToastType = "info") => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts(prev => [...prev, { id, message, type }])

    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id))
    }, 3000)
  }

  return { toasts, addToast }
}

export function ToastContainer() {
  const { toasts } = useToast()

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg animate-in slide-in-from-right ${
            toast.type === "success"
              ? "bg-green-500 text-white"
              : toast.type === "error"
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
          }`}
        >
          {toast.type === "success" && <CheckCircle className="h-4 w-4" />}
          {toast.type === "error" && <XCircle className="h-4 w-4" />}
          {toast.type === "info" && <Info className="h-4 w-4" />}
          <span className="text-sm">{toast.message}</span>
        </div>
      ))}
    </div>
  )
}
