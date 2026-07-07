import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">METALBR</div>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/sepultura">Sepultura</Link>
        </li>
        <li>
          <Link href="/sarcofago">Sarcófago</Link>
        </li>
        <li>
          <Link href="/claustrofobia">Claustrofobia</Link>
        </li>
      </ul>
    </nav>
  );
}
