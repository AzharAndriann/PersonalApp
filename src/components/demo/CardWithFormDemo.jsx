import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithFormDemo() {
  const items = [
    {
        imgSrc: "public/images/James.jpg",
        name: "James",
        description: "Azhar has been an excellent collaborator. His dedication to the project and attention to detail have been outstanding. He is always willing to go the extra mile to ensure the success of the team.",
        email: "james@gmail.com",
      },
      {
        imgSrc: "public/images/Alexandra.jpg",
        name: "Alexandra",
        description: "Working with Azhar has been a pleasure. He is not only highly skilled but also very reliable. His innovative solutions and timely delivery have greatly contributed to the success of our projects.",
        email: "alexandra@gmail.com",
      },
      {
        imgSrc: "public/images/Brian.jpg",
        name: "Brian",
        description: "I highly recommend Azhar for any project. His technical expertise and problem-solving skills are top-notch. He is a great team player and always brings a positive attitude to the work environment.",
        email: "brian@gmail.com",
      },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 ">
      {items.map((item, index) => (
        <Card key={index} className="w-[350px] dark:bg-black">
          <CardHeader>
            <div className="flex justify-center items-center mb-3">
              <img src={item.imgSrc} alt={item.name} className="w-[50px] h-[50px] rounded-full object-cover" />
            </div>
            <CardTitle className="text-center">{item.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center">
                <CardDescription className="dark:text-white">{item.description}</CardDescription>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p>- {item.email} -</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
