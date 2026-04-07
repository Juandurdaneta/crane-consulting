import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-crane-blue w-full px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
        <div>
          <Link
            href="/"
            className="text-xl font-bold font-serif text-white block mb-3"
          >
            Crane Consulting Solutions
          </Link>
          <p className="italic text-crane-peach font-serif text-lg">
            Lead. Inspire. Grow.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex gap-6 md:gap-8">
            <Link
              href="/privacy"
              className="text-crane-on-primary-container uppercase tracking-widest text-xs font-medium hover:text-crane-peach transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-crane-on-primary-container uppercase tracking-widest text-xs font-medium hover:text-crane-peach transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-crane-on-primary-container uppercase tracking-widest text-xs font-medium hover:text-crane-peach transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
          <p className="text-crane-on-primary-container text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Crane Consulting Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
