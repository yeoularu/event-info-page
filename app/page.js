import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="sticky top-0 z-50 flex min-h-16 w-full items-center bg-white shadow-md dark:bg-gray-800 flex-wrap justify-center">
        <div className="container flex items-center justify-between my-2 md:my-0 px-4 md:px-6 flex-wrap">
          <Link className="flex items-center gap-2" href="#intro">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Inc</span>
          </Link>

          <nav className="w-full flex gap-6 justify-center my-2 md:my-0 md:w-fit">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
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
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="intro"
          className="w-full py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Acme Inc Event
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join us for a day of learning, inspiration, and fun.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">Date</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    January 1, 2024
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Acme Inc HQ, San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  About
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join us for a day of learning, inspiration, and fun.
                </p>
              </div>
              <div className="grid gap-4">
                <Image src="/about.jpg" width={600} height={400} />
              </div>
            </div>
          </div>
        </section>
        <section
          id="schedule"
          className="w-full py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Schedule
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out our event schedule.
              </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 text-center pt-4">
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Opening Ceremony</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  9:00 AM - 10:00 AM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Keynote Speaker</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  10:00 AM - 11:00 AM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Break</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  11:00 AM - 12:00 PM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Workshop 1</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  12:00 PM - 1:00 PM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Lunch</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  1:00 PM - 2:00 PM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Workshop 2</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  2:00 PM - 3:00 PM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Break</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  3:00 PM - 4:00 PM
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Closing Ceremony</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  4:00 PM - 5:00 PM
                </p>
              </div>
            </div>
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
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join us for a day of learning, inspiration, and fun.
                </p>
              </div>
              <div className="grid gap-4">
                <Image src="/venue.jpg" width={600} height={400} />
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Contact
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join us for a day of learning, inspiration, and fun.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-500 dark:text-gray-400">
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
                  <p className="text-gray-500 dark:text-gray-400">
                    010-1234-5678
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Link href="#intro">
          <Button className="fixed bottom-4 right-4">Top</Button>
        </Link>
      </main>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
