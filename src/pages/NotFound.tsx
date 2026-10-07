import { Link } from 'react-router'

// Theme 404 template (#Error_404): big theme-coloured icon on the left, title, subtitle and a home button,
// absolutely centred on desktop and stacked under 960px. The original template is a bare page; here it sits
// inside the site frame, so the block is centred in the space between header and footer. Placeholder copy.
// Utilities overriding the `.bt` base heading/link styles need `!` (the base layer is unlayered CSS).
export default function NotFound() {
  return (
    <div data-section="notfound" className="bt relative min-h-[max(520px,calc(100vh-110px))] max-[960px]:min-h-0 max-[960px]:pb-[50px]">
      <div className="absolute top-1/2 left-[30px] -mt-[150px] overflow-hidden max-[960px]:static max-[960px]:mt-0 min-[768px]:max-[960px]:pt-[50px] max-[768px]:pt-[20px]">
        <div className="relative mx-auto box-content flow-root max-w-[1220px] min-[1240px]:max-w-[1260px] min-[960px]:max-[1240px]:max-w-[940px] min-[768px]:max-[960px]:max-w-[708px] max-[768px]:max-w-[550px] max-[768px]:px-[33px]">
          <div className="float-left w-[30%] text-center text-[250px] leading-[250px] text-[#0026ff] min-[960px]:max-[1240px]:text-[220px] min-[960px]:max-[1240px]:leading-[260px] max-[960px]:float-none max-[960px]:w-full min-[768px]:max-[960px]:text-[260px] min-[768px]:max-[960px]:leading-[260px] max-[768px]:text-[160px] max-[768px]:leading-[160px]">
            <i className="ti ti-traffic-cone" aria-hidden="true" />
          </div>
          <div className="float-left w-[70%] pt-[40px] max-[960px]:float-none max-[960px]:w-full max-[960px]:pt-[20px] max-[960px]:text-center">
            <h2 className="text-[45px]! leading-[45px]! max-[768px]:text-[30px]! max-[768px]:leading-[30px]!">
              Oups... Erreur 404
            </h2>
            <h4 className="text-[26px]! leading-[30px]! max-[768px]:text-[19px]! max-[768px]:leading-[25px]!">
              Cette adresse ne mène à aucune page de notre site.
            </h4>
            <p>
              <span className="text-[16px] leading-[45px] max-[768px]:mb-[15px] max-[768px]:block max-[768px]:leading-[22px]">
                Vérifiez le lien saisi puis réessayez <em>ou</em>
              </span>{' '}
              <Link
                to="/"
                className="relative ml-[20px] inline rounded-[12px] border border-solid border-[#f2e2d8] bg-transparent px-[32px] py-[16px] font-zen text-[16px] leading-[16px] font-bold text-[#1d367b]! transition-colors duration-100 ease-in-out hover:border-[#251a8e] hover:bg-[#1f1a8e] hover:text-white!"
              >
                Revenir à l’accueil
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
