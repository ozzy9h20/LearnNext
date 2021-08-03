import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is just another app to find the location of some musical events</p>
      <p>Version: 1.0.0</p>

      <Link href="/">
        <a>
          Back to Home
        </a>
      </Link>
    </div>
  )
}
