import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Send, ArrowRight, ArrowLeft, Check, AlertCircle } from "lucide-react";
import { BeamsBackground } from "./BeamsBackground";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

interface ValidationErrors {
  [key: string]: boolean;
}

export default function DevisPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    creneau: "",
    ville: "",
    codePostal: "",
    typeLogement: "",
    etage: "",
    ascenseur: "",
    cuisine: false,
    salleDeBain: false,
    peinture: false,
    sols: false,
    electricitePlomberie: false,
    renoComplete: false,
    surface: "",
    budget: "",
    dateDebut: "",
    urgence: "",
    description: "",
  });

  const totalSteps: Step = 6;

  // Validation des champs requis par étape
  const validateStep = (step: Step): boolean => {
    const newErrors: ValidationErrors = {};

    switch (step) {
      case 1:
        if (!formData.prenom.trim()) newErrors.prenom = true;
        if (!formData.nom.trim()) newErrors.nom = true;
        if (!formData.email.trim() || !formData.email.includes("@"))
          newErrors.email = true;
        if (!formData.telephone.trim()) newErrors.telephone = true;
        break;
      case 2:
        if (!formData.ville.trim()) newErrors.ville = true;
        if (!formData.codePostal.trim()) newErrors.codePostal = true;
        if (!formData.typeLogement) newErrors.typeLogement = true;
        break;
      case 3:
        // Au moins une option doit être cochée
        const hasSelection =
          formData.cuisine ||
          formData.salleDeBain ||
          formData.peinture ||
          formData.sols ||
          formData.electricitePlomberie ||
          formData.renoComplete;
        if (!hasSelection) newErrors.renovation = true;
        break;
      case 4:
      case 5:
      case 6:
        // Pas de champs obligatoires
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
      // Enlever l'erreur de rénovation dès qu'une case est cochée
      setErrors((prev) => ({ ...prev, renovation: false }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      // Enlever l'erreur du champ dès qu'on tape dedans
      setErrors((prev) => ({ ...prev, [name]: false }));
    }

    if (success) setSuccess(false);
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => (prev < totalSteps ? ((prev + 1) as Step) : prev));
      setErrors({});
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 1 ? ((prev - 1) as Step) : prev));
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigate(-1);
    }, 2000);
  };

  const progress = (currentStep / totalSteps) * 100;

  const getInputClassName = (fieldName: string, baseClass: string) => {
    const hasError = errors[fieldName];
    return `${baseClass} ${hasError ? "border-red-500 border-2 focus:border-red-500" : ""}`;
  };

  const stepImage = (() => {
    switch (currentStep) {
      case 1:
        return {
          url: "https://images.unsplash.com/photo-1606595898127-a06c52b4e2b3?auto=format&fit=crop&w=1200&q=80",
          label: "Vos coordonnées",
          desc: "Commençons par mieux vous connaître pour vous rappeler au bon moment.",
        };
      case 2:
        return {
          url: "https://images.unsplash.com/photo-1527377667-83c6c76f963f?auto=format&fit=crop&w=1200&q=80",
          label: "Votre logement",
          desc: "Dites-nous où se situe votre bien et dans quel type d'immeuble.",
        };
      case 3:
        return {
          url: "https://images.unsplash.com/photo-1701789575035-e55a9ef971c6?auto=format&fit=crop&w=1200&q=80",
          label: "Pièces à rénover",
          desc: "Sélectionnez les pièces et postes que vous souhaitez rénover.",
        };
      case 4:
        return {
          url: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=1200&q=80",
          label: "Surface & budget",
          desc: "Une estimation de la surface et du budget nous aide à calibrer votre devis.",
        };
      case 5:
        return {
          url: "https://images.unsplash.com/photo-1649298173603-9c95aa950879?auto=format&fit=crop&w=1200&q=80",
          label: "Délai souhaité",
          desc: "Précisez quand vous aimeriez que les travaux commencent.",
        };
      case 6:
        return {
          url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80",
          label: "Votre projet",
          desc: "Décrivez librement votre projet, vos envies et vos contraintes.",
        };
      default:
        return { url: "", label: "", desc: "" };
    }
  })();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <BeamsBackground />

      <div className="relative z-10 flex items-center justify-center px-0 md:px-4 lg:px-8 py-8 md:py-24">
        <div className="w-full md:h-[85vh] flex items-center justify-center">
          <div className="bg-base-200/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl w-[96%] md:w-[82%] xl:w-[80%] md:h-[85vh] flex flex-col md:flex-row overflow-hidden">
            {/* Colonne gauche : image (35%) */}
            <div className="md:w-[35%] w-full h-40 sm:h-48 md:h-full relative">
              <div className="h-full w-full overflow-hidden">
                <img
                  key={stepImage.url}
                  src={stepImage.url}
                  alt={stepImage.label}
                  className="h-full w-full object-cover transform scale-105 transition-all duration-500 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-3 md:left-6 right-3 md:right-6">
                <p className="text-[9px] sm:text-[10px] md:text-sm uppercase tracking-wide text-gray-300 mb-0.5 md:mb-2">
                  Étape {currentStep} / {totalSteps}
                </p>
                <h2 className="text-sm sm:text-base md:text-2xl lg:text-3xl font-semibold">
                  {stepImage.label}
                </h2>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-300 mt-0.5 md:mt-3 line-clamp-2 md:line-clamp-none">
                  {stepImage.desc}
                </p>
              </div>
            </div>

            {/* Colonne droite : formulaire (65%) */}
            <div className="md:w-[65%] w-full flex flex-col p-4 sm:p-5 md:p-8 lg:p-10 xl:p-12">
              <div className="mb-3 md:mb-6 text-center md:text-left">
                <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-yellow-500 mb-1.5 md:mb-3">
                  Devis rénovation d&apos;appartement
                </h1>
                <p className="text-xs md:text-sm lg:text-base text-gray-300">
                  Répondez aux questions ci-dessous. Nous vous recontactons sous
                  48h avec un devis précis.
                </p>
              </div>

              <div className="mb-3 md:mb-6">
                <div className="flex justify-between text-xs md:text-sm text-gray-400 mb-1.5 md:mb-2">
                  <span>
                    Étape {currentStep} / {totalSteps}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-1.5 md:h-2.5 bg-base-300 rounded-full overflow-hidden">
                  <div
                    className="h-1.5 md:h-2.5 bg-green-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-3 md:space-y-7 flex-1 overflow-y-auto pr-1 md:pr-2"
              >
                {currentStep === 1 && (
                  <div className="space-y-2.5 md:space-y-5 animate-in fade-in-0 duration-300">
                    <h2 className="text-base md:text-2xl font-semibold mb-1">
                      Vos coordonnées
                    </h2>
                    <div className="flex flex-col md:flex-row gap-2.5 md:gap-4">
                      <input
                        name="prenom"
                        placeholder="Prénom *"
                        value={formData.prenom}
                        onChange={handleChange}
                        className={getInputClassName(
                          "prenom",
                          "input input-bordered input-md md:input-lg w-full bg-base-100 text-white text-sm md:text-base"
                        )}
                      />
                      <input
                        name="nom"
                        placeholder="Nom *"
                        value={formData.nom}
                        onChange={handleChange}
                        className={getInputClassName(
                          "nom",
                          "input input-bordered input-md md:input-lg w-full bg-base-100 text-white text-sm md:text-base"
                        )}
                      />
                    </div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className={getInputClassName(
                        "email",
                        "input input-bordered input-md md:input-lg w-full bg-base-100 text-white text-sm md:text-base"
                      )}
                    />
                    <input
                      name="telephone"
                      type="tel"
                      placeholder="Téléphone *"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={getInputClassName(
                        "telephone",
                        "input input-bordered input-md md:input-lg w-full bg-base-100 text-white text-sm md:text-base"
                      )}
                    />
                    <input
                      name="creneau"
                      placeholder="Meilleur créneau pour être rappelé"
                      value={formData.creneau}
                      onChange={handleChange}
                      className="input input-bordered input-md md:input-lg w-full bg-base-100 text-white text-sm md:text-base"
                    />
                    {Object.keys(errors).length > 0 && (
                      <div className="flex items-center gap-2 text-red-500 text-xs md:text-sm bg-red-500/10 p-2 md:p-3 rounded-lg">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>Veuillez remplir tous les champs obligatoires (*)</span>
                      </div>
                    )}
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-2.5 md:space-y-5 animate-in fade-in-0 duration-300">
                    <h2 className="text-base md:text-2xl font-semibold mb-1">
                      Votre logement
                    </h2>
                    <div className="flex flex-col md:flex-row gap-2.5 md:gap-4">
                      <input
                        name="ville"
                        placeholder="Ville *"
                        value={formData.ville}
                        onChange={handleChange}
                        className={getInputClassName(
                          "ville",
                          "input input-bordered input-md md:input-lg w-full bg-base-100 text-white text-sm md:text-base"
                        )}
                      />
                      <input
                        name="codePostal"
                        placeholder="Code postal *"
                        value={formData.codePostal}
                        onChange={handleChange}
                        className={getInputClassName(
                          "codePostal",
                          "input input-bordered input-md md:input-lg w-full bg-base-100 text-white text-sm md:text-base"
                        )}
                      />
                    </div>

                    <select
                      name="typeLogement"
                      value={formData.typeLogement}
                      onChange={handleChange}
                      className={getInputClassName(
                        "typeLogement",
                        "select select-bordered select-md md:select-lg w-full bg-base-100 text-white text-sm md:text-base"
                      )}
                    >
                      <option value="">Type de logement *</option>
                      <option value="appartement">Appartement</option>
                      <option value="maison">Maison</option>
                      <option value="duplex">Duplex</option>
                    </select>

                    <div className="flex flex-col md:flex-row gap-2.5 md:gap-4">
                      <input
                        name="etage"
                        placeholder="Étage (ex: 3)"
                        value={formData.etage}
                        onChange={handleChange}
                        className="input input-bordered input-md md:input-lg w-full bg-base-100 text-white text-sm md:text-base"
                      />
                      <select
                        name="ascenseur"
                        value={formData.ascenseur}
                        onChange={handleChange}
                        className="select select-bordered select-md md:select-lg w-full bg-base-100 text-white text-sm md:text-base"
                      >
                        <option value="">Ascenseur ?</option>
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                      </select>
                    </div>
                    {Object.keys(errors).length > 0 && (
                      <div className="flex items-center gap-2 text-red-500 text-xs md:text-sm bg-red-500/10 p-2 md:p-3 rounded-lg">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>Veuillez remplir tous les champs obligatoires (*)</span>
                      </div>
                    )}
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-2.5 md:space-y-5 animate-in fade-in-0 duration-300">
                    <h2 className="text-base md:text-2xl font-semibold mb-1">
                      Type de rénovation
                    </h2>
                    <p className="text-xs md:text-sm text-gray-300">
                      Sélectionnez au moins une option *
                    </p>
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 text-sm md:text-base p-3 md:p-4 rounded-lg transition-all ${
                        errors.renovation
                          ? "border-2 border-red-500 bg-red-500/5"
                          : "border border-base-300"
                      }`}
                    >
                      <label className="flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-base-100/50 p-2 rounded transition">
                        <input
                          type="checkbox"
                          name="cuisine"
                          checked={formData.cuisine}
                          onChange={handleChange}
                          className="checkbox checkbox-sm md:checkbox-md"
                        />
                        Cuisine
                      </label>
                      <label className="flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-base-100/50 p-2 rounded transition">
                        <input
                          type="checkbox"
                          name="salleDeBain"
                          checked={formData.salleDeBain}
                          onChange={handleChange}
                          className="checkbox checkbox-sm md:checkbox-md"
                        />
                        Salle de bain
                      </label>
                      <label className="flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-base-100/50 p-2 rounded transition">
                        <input
                          type="checkbox"
                          name="peinture"
                          checked={formData.peinture}
                          onChange={handleChange}
                          className="checkbox checkbox-sm md:checkbox-md"
                        />
                        Peinture
                      </label>
                      <label className="flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-base-100/50 p-2 rounded transition">
                        <input
                          type="checkbox"
                          name="sols"
                          checked={formData.sols}
                          onChange={handleChange}
                          className="checkbox checkbox-sm md:checkbox-md"
                        />
                        Sols (parquet, carrelage…)
                      </label>
                      <label className="flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-base-100/50 p-2 rounded transition">
                        <input
                          type="checkbox"
                          name="electricitePlomberie"
                          checked={formData.electricitePlomberie}
                          onChange={handleChange}
                          className="checkbox checkbox-sm md:checkbox-md"
                        />
                        Électricité / Plomberie
                      </label>
                      <label className="flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-base-100/50 p-2 rounded transition">
                        <input
                          type="checkbox"
                          name="renoComplete"
                          checked={formData.renoComplete}
                          onChange={handleChange}
                          className="checkbox checkbox-sm md:checkbox-md"
                        />
                        Rénovation complète
                      </label>
                    </div>
                    {errors.renovation && (
                      <div className="flex items-center gap-2 text-red-500 text-xs md:text-sm bg-red-500/10 p-2 md:p-3 rounded-lg">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>Veuillez sélectionner au moins une option de rénovation</span>
                      </div>
                    )}
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-2.5 md:space-y-5 animate-in fade-in-0 duration-300">
                    <h2 className="text-base md:text-2xl font-semibold mb-1">
                      Surface et budget
                    </h2>
                    <input
                      name="surface"
                      placeholder="Surface approximative (m²)"
                      value={formData.surface}
                      onChange={handleChange}
                      className="input input-bordered input-md md:input-lg w-full bg-base-100 text-white text-sm md:text-base"
                    />
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="select select-bordered select-md md:select-lg w-full bg-base-100 text-white text-sm md:text-base"
                    >
                      <option value="">Budget estimé</option>
                      <option value="<20k">Moins de 20 000 €</option>
                      <option value="20-50k">20 000 – 50 000 €</option>
                      <option value=">50k">Plus de 50 000 €</option>
                    </select>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-2.5 md:space-y-5 animate-in fade-in-0 duration-300">
                    <h2 className="text-base md:text-2xl font-semibold mb-1">
                      Délai souhaité
                    </h2>
                    <input
                      name="dateDebut"
                      type="date"
                      value={formData.dateDebut}
                      onChange={handleChange}
                      className="input input-bordered input-md md:input-lg w-full bg-base-100 text-white text-sm md:text-base"
                    />
                    <select
                      name="urgence"
                      value={formData.urgence}
                      onChange={handleChange}
                      className="select select-bordered select-md md:select-lg w-full bg-base-100 text-white text-sm md:text-base"
                    >
                      <option value="">Urgence du projet</option>
                      <option value="urgent">Dès que possible</option>
                      <option value="3mois">Dans les 3 prochains mois</option>
                      <option value="flexible">Je suis flexible</option>
                    </select>
                  </div>
                )}

                {currentStep === 6 && (
                  <div className="space-y-2.5 md:space-y-5 animate-in fade-in-0 duration-300">
                    <h2 className="text-base md:text-2xl font-semibold mb-1">
                      Décrivez votre projet
                    </h2>
                    <p className="text-xs md:text-sm text-gray-300">
                      Parlez-nous de l&apos;état actuel, du style souhaité et des
                      contraintes éventuelles (copropriété, délais, etc.).
                    </p>
                    <textarea
                      name="description"
                      rows={5}
                      placeholder="Décrivez votre projet..."
                      value={formData.description}
                      onChange={handleChange}
                      className="textarea textarea-bordered textarea-md md:textarea-lg w-full bg-base-100 text-white text-sm md:text-base"
                    />
                  </div>
                )}

                <div className="flex flex-col-reverse md:flex-row justify-between items-stretch md:items-center gap-2 md:gap-4 pt-3 md:pt-5 border-t border-base-300">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="btn btn-ghost btn-sm md:btn-md text-xs md:text-base order-2 md:order-1"
                  >
                    ← Retour
                  </button>

                  <div className="flex gap-2 md:gap-4 order-1 md:order-2">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn btn-outline btn-sm md:btn-md text-xs md:text-base flex-1 md:flex-initial"
                      >
                        <ArrowLeft className="w-3.5 h-3.5 md:w-5 md:h-5" />
                        <span className="hidden sm:inline">Précédente</span>
                        <span className="inline sm:hidden">Préc.</span>
                      </button>
                    )}

                    {currentStep < totalSteps && (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn btn-primary btn-sm md:btn-md text-xs md:text-base flex-1 md:flex-initial"
                      >
                        <span className="hidden sm:inline">Suivante</span>
                        <span className="inline sm:hidden">Suiv.</span>
                        <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5" />
                      </button>
                    )}

                    {currentStep === totalSteps && (
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm md:btn-md text-xs md:text-base flex-1 md:flex-initial"
                      >
                        <Send className="w-3.5 h-3.5 md:w-5 md:h-5" />
                        Envoyer
                      </button>
                    )}
                  </div>
                </div>
              </form>

              {success && (
                <div className="alert alert-success mt-2 md:mt-4 flex items-center gap-2 text-xs md:text-base p-2 md:p-4">
                  <Check className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Votre demande a bien été envoyée. Merci !</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
