import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import Parallax from "../components/Parallax"

const images = [
  "https://cataas.com/cat?cachebust=a",
  "https://cataas.com/cat?cachebust=b",
  "https://cataas.com/cat?cachebust=c",
  "https://cataas.com/cat?cachebust=d",
  "https://cataas.com/cat?cachebust=e",
  "https://cataas.com/cat?cachebust=f",
  "https://cataas.com/cat?cachebust=g",
]

const anchors = [
  "#a",
  "#b",
  "#c",
  "#d",
  "#e",
  "#f",
  "#g",
]

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Parallax anchors={anchors} images={images}>
      <p id="a">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non aliquet erat, sit amet lacinia turpis. Sed volutpat mattis vehicula. Donec mauris risus, rhoncus ut purus ut, blandit porttitor metus. Duis in iaculis libero, ut scelerisque ex. Morbi mattis, neque id fringilla porta, dolor velit placerat tellus, nec ullamcorper enim magna in urna. Integer nec odio et dui tempor commodo. Cras sed sodales odio. Suspendisse mi arcu, vulputate eu ante et, dapibus facilisis turpis. Donec cursus elit orci, nec rutrum leo luctus lacinia.</p>
      <p></p>
      <p>Fusce tincidunt, nisl quis aliquam eleifend, dolor eros commodo ex, in tincidunt elit risus eu dolor. Nulla et euismod mauris. Etiam feugiat ornare vulputate. Aliquam ultricies aliquam felis, at interdum quam venenatis quis. Etiam volutpat eleifend neque a malesuada. Maecenas commodo finibus nibh, at sodales orci. Pellentesque tincidunt, purus ut posuere euismod, erat turpis feugiat libero, ac semper turpis metus ac libero.</p>
      <p></p>
      <p>Pellentesque elementum pretium placerat. Sed fermentum tellus vitae maximus elementum. Curabitur id sapien ullamcorper, vulputate nunc id, suscipit orci. Cras semper purus quis tortor lacinia, eget suscipit libero bibendum. Donec odio odio, porttitor eu dignissim nec, pharetra sit amet mi. Morbi accumsan, magna vel tempor sollicitudin, urna eros tincidunt nisl, eu accumsan neque metus vel sem. Ut quis pulvinar enim. Phasellus consequat mattis dui et sollicitudin. Nunc at imperdiet tellus, in vulputate felis. Cras aliquam diam ut magna tristique, eu auctor nibh volutpat. Duis bibendum, massa a facilisis dignissim, ex metus vestibulum ex, quis posuere nibh nisi vitae erat. Etiam et ornare lorem. Sed vestibulum et dui et porta. Nullam porttitor, diam vel molestie accumsan, arcu nisl pretium velit, ac elementum lorem metus at leo. Donec elementum venenatis rhoncus. Fusce vestibulum erat non gravida suscipit.</p>
      <p></p>
      <p id="b">Donec elementum est sed consequat faucibus. Nam ut luctus est, id molestie massa. Vestibulum fringilla, lacus quis mattis tristique, sem est imperdiet velit, eu pellentesque odio mi sed lorem. Aliquam nec ex congue eros tempus suscipit. Quisque sodales dapibus urna. Proin velit felis, congue non tincidunt ut, sodales sed nunc. Curabitur ut neque vitae leo faucibus bibendum malesuada non ipsum. Aenean non mollis lacus, ut porta nulla. Donec volutpat pulvinar sollicitudin. Suspendisse nec lacus id velit vulputate interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam at blandit nulla, sed maximus nisi.</p>
      <p></p>
      <p>Cras nec justo pretium, interdum erat vehicula, ultricies elit. Pellentesque consectetur facilisis lacus, sit amet volutpat nunc faucibus id. Vestibulum ac laoreet felis. Nulla sed nulla elit. Proin interdum eu justo quis semper. Nam non nisi id mi vehicula aliquet. Aliquam vel odio id ex consectetur eleifend. Quisque ac tortor viverra, porttitor justo ac, venenatis metus. Nullam at dui felis. Aenean efficitur a nunc non aliquet. Proin fringilla euismod tortor, non aliquam lorem vestibulum sed. Aliquam at purus felis. Vestibulum fermentum venenatis augue non accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam elementum nisi vitae mi blandit venenatis.</p>
      <p></p>
      <p id="c">Duis leo metus, porta nec mollis vitae, scelerisque ut neque. Vestibulum pretium velit dolor, fermentum faucibus metus fermentum at. Nulla volutpat consectetur nunc quis convallis. Etiam eu sapien eu elit imperdiet tincidunt. Quisque ut neque vitae enim euismod aliquam at in leo. Mauris orci diam, auctor sit amet augue interdum, blandit maximus felis. Nulla porta sapien mauris, nec iaculis libero condimentum sed. Nulla vitae dui eleifend, congue velit ut, dapibus elit. Cras consectetur leo iaculis orci consectetur porttitor. Fusce auctor, arcu nec pellentesque hendrerit, felis libero dapibus enim, ut varius ex enim egestas libero. Duis at volutpat turpis, vitae tincidunt nisl. Aenean facilisis nisl nulla, non blandit magna vulputate id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sit amet augue massa. Morbi mollis ligula nulla, at luctus diam sagittis id. Morbi purus dui, porta a dignissim et, rhoncus at arcu.</p>
      <p></p>
      <p>Donec malesuada molestie commodo. Quisque velit urna, dignissim vitae mollis nec, tempor eget dui. Nullam eget tortor tortor. Aenean malesuada vel orci mollis volutpat. Maecenas vel auctor justo. Duis eget mi nulla. Vestibulum vitae nunc et mauris lacinia lacinia id et sapien. Duis eu bibendum lorem. Fusce eu egestas lectus. Mauris sem tortor, commodo quis sollicitudin sit amet, pellentesque ac mauris. Vivamus at diam ac quam euismod porttitor a id lectus. Ut elementum facilisis risus vitae hendrerit. Morbi id ante quis nisi condimentum vehicula id et arcu.</p>
      <p></p>
      <p id="d">Aenean eros ante, dictum a rhoncus quis, consectetur non sapien. In quis metus sollicitudin, pharetra mauris a, dictum neque. Proin sodales tortor eu nisi dapibus, ut semper tortor congue. Sed non massa non magna pellentesque mollis at vitae tellus. In auctor tincidunt lorem, accumsan lobortis lacus fringilla non. Sed nec pretium libero. Ut eleifend vitae nisi eu finibus. Quisque convallis purus nibh, ut ornare sapien pretium et. Pellentesque est tellus, facilisis sed nibh nec, dignissim luctus lacus. Duis interdum euismod metus eu ultricies. In sed finibus lectus. Nulla ut sollicitudin justo, eget tristique eros.</p>
      <p></p>
      <p>Vivamus ex augue, aliquam ut lectus quis, imperdiet venenatis risus. In tortor lacus, posuere et ornare in, porta ac eros. Praesent ac pretium turpis. Nam dictum egestas mauris. Vivamus dui metus, vehicula vel mi a, mattis dignissim tellus. Quisque hendrerit vitae velit et volutpat. Suspendisse convallis nunc fringilla pulvinar feugiat. Vivamus velit mi, faucibus at est nec, suscipit egestas mi. Donec ac mollis augue. Sed lobortis posuere massa nec aliquet. Curabitur neque metus, laoreet aliquet leo quis, pretium rutrum dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum auctor metus non rhoncus. Sed aliquam, est non aliquet pulvinar, dui augue pulvinar nibh, vel vehicula sapien turpis at purus. Curabitur ornare dignissim libero id hendrerit. Aliquam vitae dictum magna.</p>
      <p></p>
      <p id="e">Donec tempor lorem augue, vitae mollis dolor fermentum tincidunt. Sed lobortis, nibh at euismod fringilla, augue diam vehicula ligula, ac dignissim urna lorem nec nisl. Morbi sollicitudin egestas lacinia. Proin tempor erat ut nibh dictum, eget consequat libero bibendum. Nunc sodales commodo vulputate. Proin vel neque ac mauris venenatis hendrerit eu eget leo. Nam imperdiet ut lacus sed placerat. Maecenas pellentesque bibendum iaculis. Quisque sed lacinia tellus. Aliquam ac lacus scelerisque, ultrices turpis id, imperdiet nisl. Cras eleifend urna ac leo malesuada sagittis. Suspendisse aliquet lectus nisi, sed condimentum augue maximus nec. Morbi id pulvinar lacus, quis tristique nunc. Maecenas imperdiet eros a purus malesuada feugiat. Aliquam quis tempus diam.</p>
      <p></p>
      <p>Curabitur non sollicitudin lacus. Cras convallis mauris nec velit aliquet, eu pellentesque lacus fermentum. Ut malesuada ultrices ultricies. Duis quis leo blandit, accumsan neque in, lobortis leo. Pellentesque quis est massa. Ut elementum tempor dictum. Morbi sollicitudin, quam ut aliquam accumsan, nisi nisl ullamcorper felis, a varius urna orci a tortor. Etiam blandit arcu ut tempor tempus. Cras nibh eros, cursus auctor erat ac, facilisis viverra sapien. Aenean euismod commodo ipsum et imperdiet.</p>
      <p></p>
      <p>Quisque felis sapien, facilisis eu tincidunt id, lacinia et sapien. Integer risus tellus, dignissim eu dolor ut, consectetur imperdiet quam. Suspendisse id risus sit amet ipsum scelerisque mattis. Nam velit nunc, aliquam nec vestibulum id, condimentum at enim. Nullam lacinia ipsum sed risus posuere, non semper est scelerisque. Suspendisse potenti. Phasellus feugiat dictum ante id commodo. Nam sagittis eu odio vitae tristique. Vestibulum quis vehicula orci, at accumsan odio. In et hendrerit nisl. In maximus ipsum lobortis, viverra lorem vitae, laoreet nulla. Nunc rutrum efficitur elit a eleifend. Quisque ligula nisi, sodales vel massa consectetur, tristique mollis lorem. In ac lectus a eros varius auctor ut non nibh. Aliquam dignissim pellentesque nunc nec lacinia.</p>
      <p></p>
      <p id="f">Nunc suscipit facilisis felis a sagittis. Vestibulum id odio finibus, convallis tellus et, rutrum nisi. Fusce fringilla dolor et nisi finibus, sit amet scelerisque dui fermentum. Nulla id est sit amet leo bibendum commodo. Duis a lacinia enim. In ex nunc, imperdiet et mattis ac, interdum id nunc. Pellentesque et auctor ante. Donec sagittis ultricies orci, ac placerat eros iaculis ut.</p>
      <p></p>
      <p>Cras maximus non elit ac fringilla. In hac habitasse platea dictumst. Morbi commodo metus turpis, in euismod neque fermentum ut. Cras ullamcorper, purus sed elementum eleifend, sem justo aliquet augue, eu sollicitudin nisi risus at felis. Curabitur at commodo lectus. Donec suscipit sed arcu quis luctus. Donec congue finibus nisl, ut tincidunt nibh ornare a. Nulla vel ultricies ipsum. Maecenas tempus commodo tellus sed cursus. In scelerisque aliquam elementum. Ut vel lacinia justo. Nullam suscipit pharetra mi rhoncus laoreet. Mauris vel erat dapibus, ultricies velit eu, cursus nibh.</p>
      <p></p>
      <p>Cras commodo velit ut rutrum ultricies. Vestibulum at orci pharetra, feugiat urna et, pretium libero. Mauris ultricies interdum lacus, ut maximus nulla interdum id. Integer sollicitudin pretium mollis. Phasellus a diam at sem placerat dapibus vitae eget lorem. Praesent aliquet nisl massa, at condimentum eros facilisis in. In fermentum gravida mauris, sed finibus sem efficitur sit amet. Donec fringilla odio vel sodales ullamcorper. Cras ut metus eu nibh tempus varius eget eu eros.</p>
      <p></p>
      <p>Fusce sagittis pretium metus, a pellentesque libero posuere non. Fusce quis aliquam lectus. Donec ut massa vulputate, eleifend urna sed, dapibus ipsum. Suspendisse turpis metus, accumsan sed egestas eu, feugiat a velit. Donec in interdum odio, nec iaculis orci. Quisque iaculis justo molestie sollicitudin posuere. Nulla a neque nunc. Curabitur pretium tincidunt nibh.</p>
      <p></p>
      <p id="g">Suspendisse scelerisque scelerisque augue a tempus. Pellentesque nulla justo, porttitor nec malesuada vulputate, luctus in odio. Nunc tempor varius ipsum, in mattis felis fringilla egestas. Morbi vulputate massa et elementum vestibulum. Cras accumsan fringilla est in tempus. Aenean purus lectus, euismod ut mauris ut, vulputate vestibulum lacus. Nullam mauris erat, rhoncus ut congue eu, viverra eu est. Nulla facilisi. Donec eget libero hendrerit, elementum arcu in, convallis odio. Fusce suscipit, enim at sagittis tempus, libero mi elementum lorem, ac condimentum dolor lorem eget purus. Nullam leo dolor, sagittis consectetur cursus at, facilisis in magna.</p>
      <p></p>
      <p>Curabitur ut tortor eget augue porta vulputate. Nulla scelerisque imperdiet nibh, et gravida turpis consequat ac. In auctor a tortor vel porta. Nullam viverra eu mauris quis tincidunt. Vivamus imperdiet, erat vel efficitur sollicitudin, erat neque eleifend erat, eu ultrices diam magna in nibh. Proin eu laoreet elit. Quisque vehicula congue arcu, eu finibus quam vestibulum blandit.</p>
      <p></p>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam id vestibulum nibh, sit amet tempus orci. Sed auctor ante consectetur, blandit dui sit amet, hendrerit est. Etiam pretium non mauris in finibus. Phasellus egestas quis enim ut tincidunt. Morbi porta neque vel vestibulum ornare. Nullam mattis mi et porta accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ipsum nunc, fringilla a blandit a, finibus quis neque. Suspendisse laoreet sapien diam, eget tincidunt elit porta vitae. Integer auctor fermentum eros non congue.</p>
      <p></p>
      <p>Phasellus ante tortor, vehicula et ligula at, euismod porttitor purus. In non mauris dignissim, auctor ante vel, fringilla augue. Proin quam sapien, faucibus vehicula est pulvinar, tempus aliquet orci. Maecenas eget arcu enim. Ut leo magna, molestie eu dolor vitae, rhoncus tincidunt arcu. Ut volutpat turpis non sapien consectetur rhoncus. Praesent eu ullamcorper urna.</p>
      <p></p>
      <p>Etiam lobortis tortor nulla, id bibendum diam rhoncus congue. Sed libero orci, congue fermentum blandit vel, placerat eu orci. Donec interdum ornare ligula. Nunc vitae magna nec sapien fringilla scelerisque. Ut vehicula arcu quis metus gravida auctor. Nullam iaculis ornare purus, ac condimentum ipsum maximus id. Sed mauris lorem, porta vel purus dignissim, auctor scelerisque sem. Duis vitae sodales lectus, ut malesuada turpis. Proin hendrerit, ante vel molestie fringilla, urna nunc aliquet nunc, id volutpat odio velit sit amet erat. Fusce sit amet augue eget leo imperdiet facilisis. Aenean ornare ac leo vel venenatis. Integer aliquet lacus id libero lacinia, a fermentum ante gravida. Donec sit amet auctor massa.</p>
      <p></p>
      <p>Quisque felis eros, mattis ut laoreet et, posuere nec nisl. Sed accumsan lacinia leo, sed bibendum odio condimentum vel. Curabitur consequat, est eu elementum pretium, augue nunc ornare erat, dictum suscipit turpis nisl a erat. Duis aliquam mollis ligula in ultricies. Nulla facilisi. Aenean in commodo magna. Sed ante neque, blandit sit amet placerat quis, blandit mattis purus. Maecenas nulla metus, sodales ac commodo vitae, placerat a massa. Sed eu odio nec libero fringilla faucibus.</p>
      <p></p>
      <p>Nullam nec bibendum enim. Pellentesque imperdiet nunc non metus tincidunt vehicula. Etiam quis feugiat eros. Curabitur in lobortis nulla. Proin ut magna diam. Etiam tempus accumsan lectus, nec auctor nisl aliquet vel. Mauris pharetra sem quis nisi dictum, vitae vestibulum neque ornare. Nullam ac ante maximus, eleifend sapien non, placerat lacus. Vestibulum a sem vitae lectus bibendum imperdiet id vitae ex. Duis blandit sapien molestie enim varius mattis. Quisque maximus laoreet leo, id feugiat arcu vulputate a. Curabitur condimentum massa vel ornare vehicula. Sed scelerisque tempus risus, vitae posuere est pretium quis. Duis blandit et lorem et pretium. Sed posuere quam sit amet felis feugiat, sollicitudin mattis augue accumsan.</p>
      <p></p>
      <p>Mauris accumsan nisi massa, eget ultricies eros lacinia non. Cras ut arcu ac nisl pharetra scelerisque. Integer turpis quam, interdum a massa nec, gravida auctor risus. Morbi vestibulum elementum orci, ac cursus dui pretium ac. Nulla placerat ipsum eget mattis vehicula. Vestibulum finibus enim ut consectetur viverra. Quisque ultricies pharetra mollis. Aliquam id ipsum non est accumsan posuere. Praesent iaculis sapien vitae eros luctus venenatis. Mauris mattis lectus finibus est fringilla pharetra.</p>
      <p></p>
      <p>Maecenas vehicula fermentum pulvinar. Aenean at metus vel turpis pretium facilisis. Curabitur aliquam mauris est, quis sagittis elit lacinia et. Donec euismod id massa eget sollicitudin. Nulla venenatis leo nec lorem sodales suscipit. Sed auctor commodo sapien, nec tincidunt nisl fermentum et. Nulla felis elit, aliquet eget lobortis a, placerat sit amet sapien. Donec arcu augue, vehicula ac dui ut, dapibus suscipit metus. Integer vel interdum ligula, eget porta erat. Integer rutrum tempus convallis.</p>
    </Parallax>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
