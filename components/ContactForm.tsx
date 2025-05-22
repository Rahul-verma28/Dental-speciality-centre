"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const validateForm = () => {
    // Reset errors before validation
    const newErrors: {
      firstName: string
      email: string
      phone: string
      message: string
    } = {
      firstName: "",
      email: "",
      phone: "",
      message: "",
    }

    // Validate each field
    if (!formData.firstName) newErrors.firstName = "First name is required."
    if (!formData.email) newErrors.email = "Email is required."
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address."
    if (!formData.phone) newErrors.phone = "Phone number is required."
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits."
    if (!formData.message) newErrors.message = "Message is required."
    else if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters long."
    else if (formData.message.length > 500) newErrors.message = "Message must be less than 500 characters."
    

    setErrors(newErrors)
    console.log("Validation errors:", newErrors)
    // Return true if there are no errors
    return Object.keys(newErrors).every((key) => newErrors[key as keyof typeof newErrors] === "")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
    setErrors((prev) => ({ ...prev, [id]: "" }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      console.log("Form validation failed:", errors)
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("API response received:", response)

      const result = await response.json()
      console.log("API response JSON:", result)

      if (response.ok) {
        toast.success("Message sent successfully!")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        console.error("API error:", result.message || "Unknown error")
        toast.error(result.message || "Failed to send message.")
      }
    } catch (error) {
      console.error("Error during form submission:", error)
      toast.error("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-lg">
            First Name <span className="text-blue-600">*</span>
          </Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border-gray-300 h-12"
          />
          {errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-lg">
            Last Name
          </Label>
          <Input id="lastName" value={formData.lastName} onChange={handleChange} className="border-gray-300 h-12" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-lg">
          Email <span className="text-blue-600">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="border-gray-300 h-12"
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-lg">
          Phone Number <span className="text-blue-600">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="border-gray-300 h-12"
        />
        {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-lg">
          Message <span className="text-blue-600">*</span>
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          className="min-h-[120px] border-gray-300"
        />
        {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-br from-blue-800 to-blue-950 hover:bg-gray-100 text-white px-10 py-7 text-lg font-semibold rounded-full cursor-pointer"
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

export default ContactForm
