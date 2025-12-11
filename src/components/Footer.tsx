export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-base-200 py-10 text-center">
      <h2 className="text-4xl font-bold mb-12 text-yellow-500">Prêt à transformer votre espace ?</h2>
      <p className="text-xl mb-8 text-gray-300">Contactez-nous pour une étude gratuite</p>
      <button className="btn btn-outline btn-lg mb-4">01 70 94 98 06</button>
      <div>
        <a href="mailto:contact@tonsite.fr" className="text-gray-500 underline hover:text-yellow-500">
          contact@tonsite.fr
        </a>
      </div>
    </footer>
  );
}
