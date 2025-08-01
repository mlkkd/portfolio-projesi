import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import '../App.css';
import image1 from '../assets/image-46acf5070c2b1eabe533e70cdfd6db0920cb88be.png';
import image2 from '../assets/image-ae5d91180b98e9e0920120c3b24ffbfe143d83cd.png';
import image3 from '../assets/image-3879de03212eab7e4fafca5165c55a151eca4a48.png';
import image4 from '../assets/image-7f90acac1fbd66440efa4e3870e0cd0b032f803b.png';
import image5 from '../assets/image-b15b0bea6c6f30cc354e8fe19b0d226e83daf314.png';
import image6 from '../assets/image-69fd8f8e8891be0346bd7faea3a5ad6130b18107.png';
import imagea2d1b3a41cc9761b3e8b3609af7fffb76a2461f9 from '../assets/image-a2d1b3a41cc9761b3e8b3609af7fffb76a2461f9.png';
import vectorI701729505730505711505707 from '../assets/vector-I701_729_505_730_505_711_505_707.svg';
import vectorI701729505730505711505708 from '../assets/vector-I701_729_505_730_505_711_505_708.svg';
import vectorI701729505731505711505701 from '../assets/vector-I701_729_505_731_505_711_505_701.svg';
import vectorI701729505731505711505702 from '../assets/vector-I701_729_505_731_505_711_505_702.svg';
import vectorI701729505732505711505698 from '../assets/vector-I701_729_505_732_505_711_505_698.svg';
import vectorI701729505732505711505699 from '../assets/vector-I701_729_505_732_505_711_505_699.svg';
import vectorI701730505723505716505707 from '../assets/vector-I701_730_505_723_505_716_505_707.svg';
import vectorI701730505723505716505708 from '../assets/vector-I701_730_505_723_505_716_505_708.svg';
import vectorI701730505724505716505701 from '../assets/vector-I701_730_505_724_505_716_505_701.svg';
import vectorI701730505724505716505702 from '../assets/vector-I701_730_505_724_505_716_505_702.svg';
import vectorI701730505726505716505698 from '../assets/vector-I701_730_505_726_505_716_505_698.svg';
import vectorI701730505726505716505699 from '../assets/vector-I701_730_505_726_505_716_505_699.svg';
import vectorI701730505727505716505704 from '../assets/vector-I701_730_505_727_505_716_505_704.svg';
import vectorI701730505727505716505705 from '../assets/vector-I701_730_505_727_505_716_505_705.svg';
import vector701734 from '../assets/vector-701_734.svg';
import vector701735 from '../assets/vector-701_735.svg';
import vector701736 from '../assets/vector-701_736.svg';
import vector701739 from '../assets/vector-701_739.svg';
import vector701740 from '../assets/vector-701_740.svg';
import vector701741 from '../assets/vector-701_741.svg';
import vector701742 from '../assets/vector-701_742.svg';
import vector701743 from '../assets/vector-701_743.svg';
import vector701745 from '../assets/vector-701_745.svg';
import vector701746 from '../assets/vector-701_746.svg';

const pageData = {
  header: {
    title: 'Etkileyici ve Kullanıcı Odaklı Tasarımlar',
    subtitle1: 'Markanızın kimliğini yansıtan, estetik ve işlevsel dijital deneyimler yaratıyorum.',
    subtitle2: 'Projelerinizi birlikte hayata geçirmek için iletişime geçin.',
    buttonText: 'İletişim',
    image: imagea2d1b3a41cc9761b3e8b3609af7fffb76a2461f9
  },
  gallery: {
    title: 'Son Çalışmalarım'
  },
  skills: {
    vertical: [
      {
        title: 'Ürün Tasarımı',
        description: 'Kullanıcıların sevdiği, iş hedeflerinize hizmet eden ve pazarda fark yaratan dijital ürünler.',
        icon1: vectorI701729505730505711505707,
        icon2: vectorI701729505730505711505708,
        subSkills: ['Kullanıcı Araştırması', 'Wireframing', 'Prototipleme', 'Kullanılabilirlik Testleri']
      },
      {
        title: 'Görsel Tasarım',
        description: 'Markanızın hikayesini anlatan, hedef kitlenizle bağ kuran ve akılda kalan özgün görsel kimlikler.',
        icon1: vectorI701729505731505711505701,
        icon2: vectorI701729505731505711505702,
        subSkills: ['Marka Kimliği', 'UI Tasarımı', 'İkonografi', 'Tasarım Sistemleri']
      },
      {
        title: 'Sanat Yönetmenliği',
        description: 'Projenizin vizyonunu, baştan sona tutarlı ve etkileyici bir görsel bütünlüğe dönüştüren yaratıcı yönlendirme.',
        icon1: vectorI701729505732505711505698,
        icon2: vectorI701729505732505711505699
      }
    ],
    horizontal: [
      {
          title: 'Strateji & UX',
          description: 'Kullanıcı araştırması ve veri analizine dayalı olarak, kullanıcı yolculuklarını ve etkileşimlerini optimize ediyorum.',
          icon1: vectorI701730505723505716505707,
          icon2: vectorI701730505723505716505708
      },
      {
          title: 'Arayüz Tasarımı (UI)',
          description: 'Modern tasarım trendlerini takip ederek, estetik ve kullanıcı dostu arayüzler geliştiriyorum.',
          icon1: vectorI701730505724505716505701,
          icon2: vectorI701730505724505716505702
      },
      {
          title: 'Prototipleme',
          description: 'Fikirleri somutlaştırmak ve test edilebilir hale getirmek için interaktif prototipler hazırlıyorum.',
          icon1: vectorI701730505726505716505698,
          icon2: vectorI701730505726505716505699
      },
      {
          title: 'Marka Kimliği',
          description: 'Logodan renk paletine, markanızın hikayesini anlatan bütünsel bir kimlik tasarlıyorum.',
          icon1: vectorI701730505727505716505704,
          icon2: vectorI701730505727505716505705
      }
    ]
  },
  projects: [
    { id: 1, title: 'Proje 1: Kurumsal Kimlik Tasarımı', category: 'UI, Art Direction', image: image1 },
    { id: 2, title: 'Proje 2: Mobil Bankacılık Uygulaması', category: 'UI/UX, Mobile App Design', image: image5 },
    { id: 3, title: 'Proje 3: Sağlık ve Wellness Uygulaması', category: 'Mobile App Design, Health', image: image4 },
    { id: 4, title: 'Proje 4: E-Ticaret Platformu Yeniden Tasarımı', category: 'Web Design, UX Research', image: image6 },
    { id: 5, title: 'Proje 5: Akıllı Seyahat Planlama Uygulaması', category: 'UX/UI, Mobile First Design', image: image2 },
    { id: 6, title: 'Proje 6: Kurumsal Eğitim Platformu', category: 'Web Application, UI Design', image: image3 },
  ],
  cta: {
    title: 'Birlikte Çalışalım',
    boxes: [
      {
        title: 'Bir Proje Başlatın',
        description: 'Aklınızdaki fikri hayata geçirelim. Proje detaylarınızı paylaşın, size özel bir teklif hazırlayayım.'
      },
      {
        title: 'Tasarım Danışmanlığı Alın',
        description: 'Mevcut projeniz için profesyonel bir bakış açısına mı ihtiyacınız var? Tasarım süreçlerinizi iyileştirelim.'
      },
      {
        title: 'Sadece Merhaba Deyin',
        description: 'Bir sorunuz mu var veya sadece tanışmak mı istiyorsunuz? Çekinmeyin, bir kahve ısmarlayabilirim!'
      }
    ]
  },
  footer: {
    reactLogo: vector701745,
    reactLogo2: vector701746,
    vueLogo: vector701734,
    vueLogo2: vector701735,
    vueLogo3: vector701736,
    htmlLogo: vector701739,
    htmlLogo2: vector701740,
    htmlLogo3: vector701741,
    htmlLogo4: vector701742,
    htmlLogo5: vector701743
  }
};

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className={`animated-section ${inView ? 'section-visible' : 'section-hidden'}`}>
      {children}
    </section>
  );
};

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={pageData.header.image} className="header-image" alt="header" />
        <div className="header-content">
          <h1>{pageData.header.title}</h1>
          <p>{pageData.header.subtitle1}</p>
          <p>{pageData.header.subtitle2}</p>
          <Link to="/contact"><button>{pageData.header.buttonText}</button></Link>
        </div>
      </header>
      <main>
        <AnimatedSection>
          <div className="gallery">
            <h2>{pageData.gallery.title}</h2>
            <div className="gallery-grid">
              {pageData.projects.map(project => (
                <Link to={`/project/${project.id}`} key={project.id} className="gallery-item">
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="skills">
            {pageData.skills.vertical.map(skill => (
              <div className="skill-card" key={skill.title}>
                <div className="skill-icon-wrapper">
                  <img src={skill.icon1} alt="beceri simgesi" className="skill-icon-bg"/>
                  <img src={skill.icon2} alt="ok simgesi" className="skill-icon-fg"/>
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                {skill.subSkills && (
                  <ul className="sub-skills-list">
                    {skill.subSkills.map(subSkill => <li key={subSkill}>{subSkill}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="skills-horizontal">
            {pageData.skills.horizontal.map(skill => (
              <div className="skill-card-horizontal" key={skill.title}>
                 <div className="skill-icon-wrapper-horizontal">
                  <img src={skill.icon1} alt="beceri simgesi" className="skill-icon-bg-horizontal"/>
                  <img src={skill.icon2} alt="ok simgesi" className="skill-icon-fg-horizontal"/>
                </div>
                <div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection>
            <div className="cta-section">
                <h2>{pageData.cta.title}</h2>
                <div className="cta-grid">
                    {pageData.cta.boxes.map(box => (
                        <Link to="/contact" key={box.title} className="cta-card">
                            <h3>{box.title}</h3>
                            <p>{box.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </AnimatedSection>
      </main>
      <footer>
        <div>
          <img src={pageData.footer.reactLogo} alt="React Logo" />
          <img src={pageData.footer.reactLogo2} alt="React Logo" />
        </div>
        <div>
          <img src={pageData.footer.vueLogo} alt="Vue Logo" />
          <img src={pageData.footer.vueLogo2} alt="Vue Logo" />
          <img src={pageData.footer.vueLogo3} alt="Vue Logo" />
        </div>
        <div>
          <img src={pageData.footer.htmlLogo} alt="HTML5 Logo" />
          <img src={pageData.footer.htmlLogo2} alt="HTML5 Logo" />
          <img src={pageData.footer.htmlLogo3} alt="HTML5 Logo" />
          <img src={pageData.footer.htmlLogo4} alt="HTML5 Logo" />
          <img src={pageData.footer.htmlLogo5} alt="HTML5 Logo" />
        </div>
      </footer>
    </div>
  );
}

export default Home;