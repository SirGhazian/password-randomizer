export default function CreditsFooter() {
  return (
    <>
      {/* CREDITS */}
      <p className="mt-12 text-sm">
        <span>Crafted with</span>
        <span className="relative mx-2 text-accent">
          <i className="fa-solid fa-heart z-10" />
          <i className="absolute fa-solid fa-heart text-red-400 left-0 top-1 animate-ping" />
        </span>
        <span>
          by{" "}
          <a
            href="https://github.com/SirGhazian/"
            target="_blank"
            className="font-semibold hover:text-accent duration-300 transi"
          >
            SirGhazian
          </a>
        </span>
      </p>
    </>
  );
}
