import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface DoctorCardProps {
  name: string;
  role?: string;
  education: string[];
  bio?: string;
  image: string;
  featured?: boolean;
}

export default function DoctorCard({
  name,
  role,
  education,
  bio,
  image,
  featured = false,
}: DoctorCardProps) {
  if (featured) {
    return (
      <Card className="overflow-hidden hover:shadow-xl transition-all">
        <div className="grid md:grid-cols-2">
          <div className="relative h-[700px]">
            <Image
              src={image || "/doctors/docter.png"}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6 py-16">
            <h3 className="mb-1 text-4xl font-bold text-[#1a2e4c]">{name}</h3>
            {role && (
              <p className="mb-3 text-xl font-medium text-blue-600">{role}</p>
            )}
            <div className="mb-4">
              {education.map((edu, index) => (
                <p key={index} className=" text-gray-600">
                  {edu}
                </p>
              ))}
            </div>
            {bio && <p className="text-gray-700 text-md md:text-lg">{bio}</p>}
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl">
      <div className="relative h-[500px]">
        <Image
          src={image || "/doctors/docter.png"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="px-6">
        <h3 className="mb-1 text-2xl font-bold text-[#1a2e4c]">{name}</h3>
        {role && <p className=" font-semibold text-blue-400">{role}</p>}
        <div className="py-2">
          {education.map((edu, index) => (
            <p key={index} className="text-sm text-gray-600">
              {edu}
            </p>
          ))}
        </div>
        {bio && <p className="text-gray-700">{bio}</p>}
      </CardContent>
    </Card>
  );
}
