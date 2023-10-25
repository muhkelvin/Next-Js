export default function Page({ params }) {
    return <div className="text-white">My Post: {params.slug}</div>
  }

  // kalau dia nerima banyak parameter gunakan ... kalau tidak enggak usah