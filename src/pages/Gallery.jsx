function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    "https://images.unsplash.com/photo-1549366021-9f761d450615",
    "https://images.unsplash.com/photo-1535338454770-8be927b5a00b",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  ];

  return (
    <section style={{ paddingTop: "150px" }} className="px-8 py-20">

      <h1 className="text-5xl font-bold text-center mb-12">
        Safari Gallery
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="h-72 w-full object-cover rounded-xl"
          />
        ))}
      </div>

    </section>
  );
}

export default Gallery;