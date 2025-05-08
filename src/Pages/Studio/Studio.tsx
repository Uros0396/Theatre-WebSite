import Navbar from "../../Components/Navbar/Navbar";
import StudioImage from "../../assets/1. STUDIO BANNER.png";
import Footer from "../../Components/Footer/Footer";

const Studio: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
      </div>

      <div className="img-wrapper-chi-siamo">
        <img
          src={StudioImage}
          alt="chi-siamo-image"
          className="img-chi-siamo"
        />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5 p-2 p-md-5 p-lg-5">
            <h4>STUDIO</h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5 ">
            <p>
              Le produzioni sono collegate tra loro attraverso elementi
              simbolici in un racconto artistico che approfondisce alcuni
              argomenti ricorrenti: la casa, la memoria, la famiglia,
              l’infanzia, il corpo, la perdita, la morte, il vuoto. La memoria
              di famiglie e della nostra infanzia, di traumi, di avi, luoghi e
              oggetti che li richiamano, abitano lo spazio scenico o museale.
              L’idea nasce da una fotografia scattata con la vecchia Minolta del
              nonno, o da un romanzo. Fiabe, poesie, temi classici trasmettono
              alle drammaturgie originali un senso atemporale. Immagine, parola
              e suono convergono nei live-set o in registrazioni audiovisive.
              Stiamo lavorando in modo trasversale a performance e progetti
              site-specific.
            </p>
            <p>
              Il nostro lavoro tecnico si concentra sul design dei sentimenti e
              delle sensazioni, per arrivare a realizzare atmosfere con le
              combinazioni di materiali e i contrasti, alternando oggetti, corpi
              e superfici.Le sintesi arrivano tardi dalle tavole rotonde,
              traducendo le disamine concettuali e sensibili in visioni più
              astratte, non logiche. Creature immaginate, elementi infantili si
              mescolano alla brutalità della realtà e alle riflessioni
              sull’attualità. Se da un lato i nostri lavori possono essere crudi
              nel tentativo di rappresentare gli aspetti più controversi del
              presente, sono investiti con il portato affettivo delle nostre
              storie e quelle delle persone che incontriamo. Ascoltiamo e
              osserviamo. Raccogliamo interviste, esperienze in sala prove da
              cui conserviamo bozzetti per progetti nuovi. Quando apriamo la
              nostra ricerca durante i laboratori, notiamo come il corpo
              interagisce con gli spazi ospiti, con le architetture, si mescola
              alla materia e come cambia con il cambiare del paesaggio.
              Filosofia, geopolitica, scienza ci ispirano contestualmente alle
              nostre diverse formazioni in itinere.
            </p>
            <p>
              La ricerca si situa nei luoghi di soglia, nei vuoti lasciati dai
              dubbi sui nuovi linguaggi. Il teatro è parte vitale di una
              trattativa aperta con la rappresentazione del mondo. La
              maggioranza di noi ha alle spalle una storia personale con il
              teatro che poi si è interrogata, insieme al cambiamento del tempo,
              che ha inscritto il teatro tra i linguaggi superati e morti.
              Quello che ci interessa è trovare strade di creazione fuori dalla
              condanna della definizione, attraversare tutte le discipline senza
              il dovere morale di essere al passo coi tempi. Insieme, la
              performance, la danza, la fotografia da sole non estingueranno le
              nostre domande, ma sono la nostra pratica di libertà. Il desiderio
              di creare è spietato e l’arte è il nostro rifugio dove percepire
              quella spietatezza e assecondare la perversione di guardare.
              Guardare anche le cose tristi da una sorta di zona franca. La
              performance tra tutte è il modo più violento di guardare, perché
              autorizza le proiezioni e crea la realtà, mentre lavorare la
              materia è un esercizio meditativo. Usiamo tutti i mezzi a
              disposizione per le nostre creazioni, senza porci limiti formali,
              rifuggendo le categorizzazioni.{" "}
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 p-2 p-md-5 p-lg-5">
            <h4> LABORATORI</h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5">
            <p>Libertà 2018 - 2025</p>
            <p>Dance Dance Dance 2023 - 2024</p>
            <hr />
            <p>Flowering 2023 - 2024</p>
            <hr />
            <p>Gymnasium 2024</p>
            <hr />
            <p>Operating theatre 2023 - 2025</p>
            <hr />
            <p>MyBodyTales 2025</p>
            <hr />
            <p>Ombra 2025</p>
            <hr />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Studio;
