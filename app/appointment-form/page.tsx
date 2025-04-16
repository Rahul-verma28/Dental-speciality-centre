// "use client"

// import { useState, useEffect } from "react"
// import { format } from "date-fns"
// import { Calendar, Search, RefreshCw, Edit, Trash2, CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { AppointmentStatus } from "@/lib/models/Appointment"
// // import StatusUpdateModal from "@/components/status-update-modal"
// import { Skeleton } from "@/components/ui/skeleton"
// // import { DatePickerWithRange } from "@/components/date-range-picker"
// // import type { DateRange } from "react-day-picker"

// // Define appointment interface
// interface Appointment {
//   _id: string
//   firstName: string
//   lastName?: string
//   email: string
//   phone: string
//   preferredDate: string
//   preferredTime: string
//   status: AppointmentStatus
//   createdAt: string
//   updatedAt: string
// }

// export default function AppointmentsPage() {
//   // State for appointments and loading
//   const [appointments, setAppointments] = useState<Appointment[]>([])
//   const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   // State for filters
//   const [searchQuery, setSearchQuery] = useState("")
//   const [statusFilter, setStatusFilter] = useState<string>("")
// //   const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

//   // State for modal
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)

//   // Fetch appointments
//   const fetchAppointments = async () => {
//     setLoading(true)
//     setError(null)

//     try {
//       // Build query parameters
//       const params = new URLSearchParams()
//       if (statusFilter) params.append("status", statusFilter)
//     //   if (dateRange?.from) params.append("startDate", dateRange.from.toISOString())
//     //   if (dateRange?.to) params.append("endDate", dateRange.to.toISOString())
//       if (searchQuery) params.append("search", searchQuery)

//       const response = await fetch(`/api/appointments/${params.toString()}`)
//       const result = await response.json()

//       if (!response.ok) {
//         throw new Error(result.message || "Failed to fetch appointments")
//       }

//       setAppointments(result.data)
//       setFilteredAppointments(result.data)
//     } catch (err) {
//       console.error("Error fetching appointments:", err)
//       setError(err instanceof Error ? err.message : "An unknown error occurred")
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Initial fetch
//   useEffect(() => {
//     fetchAppointments()
//   }, [])

//   // Apply filters
//   useEffect(() => {
//     // Apply client-side filtering
//     let filtered = [...appointments]

//     // Apply search filter
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase()
//       filtered = filtered.filter(
//         (appointment) =>
//           appointment.firstName.toLowerCase().includes(query) ||
//           (appointment.lastName && appointment.lastName.toLowerCase().includes(query)) ||
//           appointment.email.toLowerCase().includes(query) ||
//           appointment.phone.includes(query),
//       )
//     }

//     // Apply status filter
//     if (statusFilter) {
//       filtered = filtered.filter((appointment) => appointment.status === statusFilter)
//     }

//     // Apply date range filter
//     // if (dateRange?.from || dateRange?.to) {
//     //   filtered = filtered.filter((appointment) => {
//     //     const appointmentDate = new Date(appointment.preferredDate)

//     //     if (dateRange.from && dateRange.to) {
//     //       return appointmentDate >= dateRange.from && appointmentDate <= dateRange.to
//     //     } else if (dateRange.from) {
//     //       return appointmentDate >= dateRange.from
//     //     } else if (dateRange.to) {
//     //       return appointmentDate <= dateRange.to
//     //     }

//     //     return true
//     //   })
//     // }

//     setFilteredAppointments(filtered)
//   }, [appointments, searchQuery, statusFilter])

//   // Handle status update
//   const handleStatusUpdate = async (id: string, status: AppointmentStatus, notes?: string) => {
//     try {
//       const response = await fetch(`/api/appointments/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ status, notes }),
//       })

//       const result = await response.json()

//       if (!response.ok) {
//         throw new Error(result.message || "Failed to update appointment status")
//       }

//       // Update appointments list
//       setAppointments((prev) =>
//         prev.map((appointment) =>
//           appointment._id === id ? { ...appointment, status } : appointment,
//         ),
//       )

//       setIsModalOpen(false)
//       setSelectedAppointment(null)
//     } catch (err) {
//       console.error("Error updating appointment status:", err)
//       setError(err instanceof Error ? err.message : "An unknown error occurred")
//     }
//   }

//   // Handle appointment deletion
//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this appointment?")) {
//       return
//     }

//     try {
//       const response = await fetch(`/api/appointments/${id}`, {
//         method: "DELETE",
//       })

//       const result = await response.json()

//       if (!response.ok) {
//         throw new Error(result.message || "Failed to delete appointment")
//       }

//       // Remove from appointments list
//       setAppointments((prev) => prev.filter((appointment) => appointment._id !== id))
//     } catch (err) {
//       console.error("Error deleting appointment:", err)
//       setError(err instanceof Error ? err.message : "An unknown error occurred")
//     }
//   }

//   // Get status badge
//   const getStatusBadge = (status: AppointmentStatus) => {
//     switch (status) {
//       case AppointmentStatus.PENDING:
//         return (
//           <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
//             <Clock className="mr-1 h-3 w-3" /> Pending
//           </Badge>
//         )
//       case AppointmentStatus.CONFIRMED:
//         return (
//           <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
//             <CheckCircle className="mr-1 h-3 w-3" /> Confirmed
//           </Badge>
//         )
//       case AppointmentStatus.COMPLETED:
//         return (
//           <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
//             <CheckCircle className="mr-1 h-3 w-3" /> Completed
//           </Badge>
//         )
//       case AppointmentStatus.CANCELLED:
//         return (
//           <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
//             <XCircle className="mr-1 h-3 w-3" /> Cancelled
//           </Badge>
//         )
//       default:
//         return <Badge variant="outline">{status}</Badge>
//     }
//   }

//   return (
//     <div className="container py-8">
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Appointment Management</CardTitle>
//           <CardDescription>View and manage all patient appointments</CardDescription>
//         </CardHeader>
//         <CardContent>
//           {/* Filters */}
//           <div className="mb-6 flex flex-col gap-4 md:flex-row">
//             <div className="flex-1">
//               <div className="relative">
//                 <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
//                 <Input
//                   placeholder="Search by name, email or phone..."
//                   className="pl-9"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="flex gap-2">
//               <Select value={statusFilter} onValueChange={setStatusFilter}>
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Filter by status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Statuses</SelectItem>
//                   <SelectItem value={AppointmentStatus.PENDING}>Pending</SelectItem>
//                   <SelectItem value={AppointmentStatus.CONFIRMED}>Confirmed</SelectItem>
//                   <SelectItem value={AppointmentStatus.COMPLETED}>Completed</SelectItem>
//                   <SelectItem value={AppointmentStatus.CANCELLED}>Cancelled</SelectItem>
//                 </SelectContent>
//               </Select>

//               {/* <DatePickerWithRange date={dateRange} setDate={setDateRange} /> */}

//               <Button variant="outline" onClick={() => fetchAppointments()}>
//                 <RefreshCw className="mr-2 h-4 w-4" />
//                 Refresh
//               </Button>
//             </div>
//           </div>

//           {/* Error message */}
//           {error && (
//             <div className="mb-4 rounded-md bg-red-50 p-4 text-red-700">
//               <p>{error}</p>
//             </div>
//           )}

//           {/* Appointments table */}
//           <div className="rounded-md border">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Patient</TableHead>
//                   <TableHead>Contact</TableHead>
//                   <TableHead>Date & Time</TableHead>
//                   <TableHead>Service</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {loading ? (
//                   // Loading skeletons
//                   Array.from({ length: 5 }).map((_, index) => (
//                     <TableRow key={index}>
//                       <TableCell>
//                         <Skeleton className="h-6 w-32" />
//                       </TableCell>
//                       <TableCell>
//                         <Skeleton className="h-6 w-40" />
//                       </TableCell>
//                       <TableCell>
//                         <Skeleton className="h-6 w-32" />
//                       </TableCell>
//                       <TableCell>
//                         <Skeleton className="h-6 w-24" />
//                       </TableCell>
//                       <TableCell>
//                         <Skeleton className="h-6 w-24" />
//                       </TableCell>
//                       <TableCell>
//                         <Skeleton className="h-6 w-20 float-right" />
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 ) : filteredAppointments.length === 0 ? (
//                   <TableRow>
//                     <TableCell colSpan={6} className="h-24 text-center">
//                       No appointments found
//                     </TableCell>
//                   </TableRow>
//                 ) : (
//                   filteredAppointments.map((appointment) => (
//                     <TableRow key={appointment._id}>
//                       <TableCell>
//                         <div className="font-medium">
//                           {appointment.firstName} {appointment.lastName}
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <div>{appointment.email}</div>
//                         <div className="text-sm text-gray-500">{appointment.phone}</div>
//                       </TableCell>
//                       <TableCell>
//                         <div className="flex items-center">
//                           <Calendar className="mr-2 h-4 w-4 text-gray-500" />
//                           <span>{format(new Date(appointment.preferredDate), "MMM d, yyyy")}</span>
//                         </div>
//                         <div className="text-sm text-gray-500 pl-6">{appointment.preferredTime}</div>
//                       </TableCell>
//                       <TableCell>{appointment.service || "General Checkup"}</TableCell>
//                       <TableCell>{getStatusBadge(appointment.status as AppointmentStatus)}</TableCell>
//                       <TableCell className="text-right">
//                         <div className="flex justify-end gap-2">
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             onClick={() => {
//                               setSelectedAppointment(appointment)
//                               setIsModalOpen(true)
//                             }}
//                           >
//                             <Edit className="h-4 w-4" />
//                           </Button>
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             className="text-red-600 hover:bg-red-50 hover:text-red-700"
//                             onClick={() => handleDelete(appointment._id)}
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 )}
//               </TableBody>
//             </Table>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Status update modal */}
//       {selectedAppointment && (
//         // <StatusUpdateModal
//         //   isOpen={isModalOpen}
//         //   onClose={() => {
//         //     setIsModalOpen(false)
//         //     setSelectedAppointment(null)
//         //   }}
//         //   appointment={selectedAppointment}
//         //   onStatusUpdate={handleStatusUpdate}
//         // />
//         "hello"
//       )}
//     </div>
//   )
// }



"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch appointments from the API
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("/api/appointment");
        const data = await response.json();

        if (response.ok) {
          setAppointments(data.appointments);
        } else {
          setError(data.message || "Failed to fetch appointments.");
        }
      } catch (err) {
        console.error("Error fetching appointments:", err);
        setError("An error occurred while fetching appointments.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-8 bg-gray-200">
      <h1 className="text-3xl font-bold mb-6">Appointments</h1>

      {loading ? (
        <p>Loading appointments...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="overflow-x-auto bg-white">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Preferred Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Preferred Time</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {appointment.firstName} {appointment.lastName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{appointment.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{appointment.phone}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(appointment.preferredDate).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{appointment.preferredTime}</td>
                  <td className="border border-gray-300 px-4 py-2">{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}