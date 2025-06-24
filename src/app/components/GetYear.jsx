'use client' // only if using App Router and client-side logic

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="">
      &copy; {year} 
    </footer>
  );
}
