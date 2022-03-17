import luxemburg from './images/luxemburg.png'
import saar from './images/saar.png'
import klet from './images/klet.png'

export default [
    {
        title: "Luxembourg Old City",
        location: "Luxembourg",
        googleMapsUrl: "https://goo.gl/maps/hH3YwEVxo8FdpTsc6",
        startDate: "28.06.2020.",
        endDate: "",
        description: "Tu smo bili jednu slobodnu nedjelju dok smo radili na Hambach projektu. Zgodni grad. " + 
        "Daleko preskupi i prebogati za nas bogce z Hrvatske. Najviše mi se sviđal stari grad, njegova " +
        "arhitektura i feeling. Posjetil bi opet kad bi imal viška para.",
        imagePath: (<img src={luxemburg} />)
    },
    {
        title: "Saar River",
        location: "Somewhere in Saarland",
        googleMapsUrl: "https://goo.gl/maps/dFaxLfJ5AMFGXELc9",
        startDate: "01.06.2020.",
        endDate: undefined,
        description: "Ahh, rijeka Saar. Izletište na rijeci Saar. Spustili smo se po šumskom putu do rijeke " +
        "gdje smo se prošetali po uređenom puteljku. Po drugom putu smo se kroz šumu uspeli natrag do izletišta " +
        "gdje smo se najeli. Priroda, šuma i lijepi pogled, 7/10",
        imagePath: (<img src={saar} />)
    },
    {
        title: "Moja klet",
        location: "Petkovec",
        googleMapsUrl: "https://goo.gl/maps/XgMeEVEeBWM3XsQf6",
        startDate: "1996.",
        endDate: "danas",
        description: "Znate kak vele, moja kletica moja slobodica. Tu je vino, tu su voćke, ovce, posel, ali i " +
        "mjesto na kojem si sjedneš, opustiš se i sretan si kaj si živ. U kleti je mala pećka na kojoj se grijemo " +
        "dok dojde hladno vijeme. Jedno od boljih doživljaja je kad je vani sumrak, a unutra peć gori toplom " +
        "narančastom svijetlosti.",
        imagePath: (<img src={klet} />)

    }
]