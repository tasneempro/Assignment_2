import Hero from "../components/Hero";

export default function HomePage({ onExploreClick }) {
  return (
    <div>
      <Hero onExploreClick={onExploreClick} />
    </div>
  );
}
