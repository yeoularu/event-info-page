"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import route_information_1 from "@/public/route_information_1.png";
import route_information_2 from "@/public/route_information_2.png";

export default function Home() {
  useEffect(() => {
    const initMaps = () => {
      const locations = [
        {
          lat: 37.454788,
          lng: 126.95066,
          elementId: "map1",
          title: "38, College of Engineering, Seoul National University",
          zoom: 16,
        },
        {
          lat: 37.46792035367733,
          lng: 126.95894058228868,
          elementId: "map2",
          title: "Hoam Faculty House",
          zoom: 16,
        },
      ];

      locations.forEach((location) => {
        if (!document.getElementById(location.elementId)) return;

        const map = new google.maps.Map(
          document.getElementById(location.elementId),
          {
            zoom: location.zoom,
            center: location,
          }
        );

        new google.maps.Marker({
          position: location,
          map: map,
          title: location.title,
        });
      });
    };

    const apiKey = "AIzaSyDzgwSLnm3DYves43xc9VSo2MNuGyZ3ODU";

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMaps`;
    script.async = true;
    script.defer = true;
    window.initMaps = initMaps;
    document.head.appendChild(script);

    return () => {
      window.initMaps = null;
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white ">
      <header className="sticky top-0 z-50 flex min-h-16 w-full items-center bg-white shadow-md ">
        <div className="container flex items-center justify-between my-2 md:my-0 px-4 md:px-6 flex-wrap">
          <Link className="flex items-center gap-2" href="#intro">
            <span className="text-lg font-semibold">
              32nd ITPA IOS TG Meeting
            </span>
          </Link>

          <nav className="w-full flex gap-6 justify-center my-2 md:my-0 md:w-fit">
            {/* <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link> */}
            <Link
              href="#schedule"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Schedule
            </Link>
            <Link
              href="#venue"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Venue
            </Link>
            <Link
              href="#accommodation"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Accommodation
            </Link>
            <Link
              href="#visa"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Visa
            </Link>
            {/* <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link> */}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="intro"
          className="w-full py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-10 text-center">
              <div className="space-y-8">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The 32nd Integrated Operating Scenarios TG Meeting
                </h1>
                <h2 className="max-w-[600px] m-auto text-gray-500 md:text-xl/relaxed">
                  The 32nd ITPA Integrated Operation Scenario Topical Group
                  Meeting will be held at Seoul National University.
                </h2>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">Date</h3>
                  <p className="text-base text-gray-500 md:text-xl/relaxed">
                    May 7th - May 10th, 2024
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-base text-gray-500 md:text-xl/relaxed">
                    College of Engineering, Seoul National University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section
          id="about"
          className="w-full py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  About
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  Join us for a day of learning, inspiration, and fun.
                </p>
              </div>
              <div className="grid gap-4">
                <Image src="/about.jpg" width={600} height={400} />
              </div>
            </div>
          </div>
        </section> */}
        <section
          id="schedule"
          className="w-full py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Schedule
              </h2>

              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Check out the full schedule{" "}
                <Link
                  href="https://indico.iter.org/event/247/"
                  className="text-blue-500 hover:underline underline-offset-2"
                >
                  Here
                </Link>
                .
              </p>
            </div>
            {/* <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 text-center pt-4">
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Opening Ceremony</h3>
                <p className="text-gray-500 ">
                  9:00 AM - 10:00 AM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Keynote Speaker</h3>
                <p className="text-gray-500 ">
                  10:00 AM - 11:00 AM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Break</h3>
                <p className="text-gray-500 ">
                  11:00 AM - 12:00 PM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Workshop 1</h3>
                <p className="text-gray-500 ">
                  12:00 PM - 1:00 PM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Lunch</h3>
                <p className="text-gray-500 ">
                  1:00 PM - 2:00 PM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Workshop 2</h3>
                <p className="text-gray-500 ">
                  2:00 PM - 3:00 PM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Break</h3>
                <p className="text-gray-500 ">
                  3:00 PM - 4:00 PM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Closing Ceremony</h3>
                <p className="text-gray-500 ">
                  4:00 PM - 5:00 PM
                </p>
              </div>
            </div> */}
          </div>
        </section>
        <section
          id="venue"
          className="w-full py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Venue
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  College of Engineering, Seoul National University
                </p>
              </div>
              {/* <div
                id="map1"
                style={{
                  height: "500px",
                  width: "100%",
                  marginBottom: "2rem",
                }}
              ></div> */}

              <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg flex flex-col md:flex-row justify-between text-left space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-col space-y-4 w-full bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <LocateIcon className="text-gray-500" />
                    <h2 className="text-lg font-semibold">Address</h2>
                  </div>
                  <p className="text-gray-700">
                    (08826) 1 Gwanak-ro, Gwanak-gu, Seoul, 08826, Republic of
                    Korea
                  </p>
                </div>

                <div className="flex flex-col space-y-4 w-full bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <BusStopIcon className="text-gray-500" />
                    <h2 className="text-lg font-semibold">Nearby bus stops</h2>
                  </div>
                  <div className="text-gray-700">
                    College of Agriculture and Life Sciences
                    <p className="text-gray-500 text-sm">
                      | 21272 Towards the College of Engineering Entrance
                    </p>
                  </div>
                  <div className="text-gray-700">
                    College of Agriculture and Life Sciences
                    <p className="text-gray-500 text-sm">
                      | 21293 Towards Seoul National University Entrance Station
                    </p>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 w-full bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <BusIcon className="text-gray-500" />
                    <h2 className="text-lg font-semibold">Nearby buses</h2>
                  </div>
                  <p className="text-gray-700">🟩 5511</p>
                  <p className="text-gray-700">🟩 5513</p>
                  <p className="text-gray-700">🟩 5516</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="accommodation"
          className="w-full py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Accommodation
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  Hoam Faculty House{" "}
                  <Link
                    href="https://hoamstay.com/"
                    className="inline-flex font-medium items-center text-blue-500 hover:underline underline-offset-2"
                  >
                    (Link)
                  </Link>
                </p>
              </div>
              <div
                id="map2"
                style={{
                  height: "500px",
                  width: "100%",
                  marginBottom: "2rem",
                }}
              ></div>

              <div>
                <p className="m-auto max-w-[1200px] text-gray-500 md:text-xl/relaxed">
                  For whom wants to stay at Hoam Faculty House, please provide
                  the information below to{" "}
                  <Link
                    href="mailto:ysna@snu.ac.kr"
                    className="inline-flex items-center text-blue-500 hover:underline underline-offset-2"
                  >
                    ysna@snu.ac.kr
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="mailto:bbqin4@snu.ac.kr"
                    className="inline-flex items-center text-blue-500 hover:underline underline-offset-2"
                  >
                    bbqin4@snu.ac.kr
                  </Link>
                </p>
                <div className="w-fit text-left m-auto">
                  <ul className="list-disc m-auto max-w-[1200px] text-gray-500 md:text-xl/relaxed">
                    <li>Check-in and -out date</li>
                    <li>Number of people to stay</li>
                    <li>Any preference</li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="font-semibold m-auto max-w-[1200px] text-gray-700 md:text-xl/relaxed">
                  Costs
                </p>
                <p className="m-auto max-w-[1200px] text-gray-500 md:text-xl/relaxed">
                  IOS meeting discount: 108900KRW (~80USD) per night
                </p>
                <p className="m-auto max-w-[1200px] text-gray-500 md:text-md/relaxed lg:text-md/relaxed xl:text-md/relaxed">
                  Original price: 121000KRW (~90USD) per night
                </p>
              </div>

              <hr className="w-full max-w-[1200px] my-8 border-gray-300" />

              <p className="font-semibold m-auto max-w-[1200px] text-gray-700 md:text-xl/relaxed">
                Directions to Hoam Faculty House from Incheon International
                Airport
              </p>
              <br />
              <p className="m-auto max-w-[1200px] text-gray-500 md:text-xl/relaxed">
                Upon your arrival at Incheon International Airport, please
                proceed to take bus number 6017. You can find the bus departing
                from two locations: at the Bus Stop No. 6 on the 1st Floor and
                at the Bus Stop No. 27 in the Transportation Center Basement 1.
                For your convenience, the locations of these bus stops are
                indicated in the image below. Your destination stop will be
                ‘Hoam Professor Hall’.
              </p>
              <p className="m-auto max-w-[1200px] text-gray-500 md:text-xl/relaxed">
                For more information, please visit{" "}
                <Link
                  href="https://www.airport.kr/ap/en/tpt/busRouteList.do"
                  className="font-semibold text-blue-500 hover:underline underline-offset-2"
                >
                  here
                </Link>{" "}
                and search for bus number 6017.
              </p>
              <Image
                src={route_information_1}
                width={1200}
                height={800}
                placeholder="blur"
              />
              <Image
                src={route_information_2}
                width={1200}
                height={800}
                placeholder="blur"
              />
            </div>
          </div>
        </section>
        <section
          id="visa"
          className="w-full py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-10 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Visa Application Form
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  To apply for a visa, Fill in the documents below and send it
                  back to ysna@snu.ac.kr.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">
                    Visa Application Form
                  </h3>
                  <Button
                    className="inline-flex w-fit m-auto"
                    variant="outline"
                    onClick={() => {
                      fetch(
                        "/invitation_letter_for_visa_purpose_request.docx"
                      ).then((response) => {
                        response.blob().then((blob) => {
                          let url = window.URL.createObjectURL(blob);
                          let a = document.createElement("a");
                          a.href = url;
                          a.download =
                            "invitation_letter_for_visa_purpose_request.docx";
                          a.click();
                        });
                      });
                    }}
                  >
                    File Download
                  </Button>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-500 ">ysna@snu.ac.kr</p>
                  <Link href="mailto:ysna@snu.ac.kr">
                    <Button className="inline-flex" variant="outline">
                      Send Email
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section
          id="contact"
          className="w-full py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Contact
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  Join us for a day of learning, inspiration, and fun.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-500 ">
                    asdf@example.com
                  </p>
                  <Link href="mailto:asdf@example.com">
                    <Button className="inline-flex" variant="outline">
                      Send Email
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-500 ">
                    010-1234-5678
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <Link href="#intro">
          <Button className="fixed bottom-4 right-4">Top</Button>
        </Link>
      </main>
    </div>
  );
}

function BusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
}

function BusStopIcon(props) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 16.01L16.01 15.9989"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 16.01L6.01 15.9989"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 22V15V8M20 8H18L18 2H22V8H20Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 20V22H6V20H4Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 20V22H16V20H14Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 20H2.6C2.26863 20 2 19.7314 2 19.4V12.6C2 12.2686 2.26863 12 2.6 12H16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8H6M14 2H6C3.79086 2 2 3.79086 2 6V8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}
