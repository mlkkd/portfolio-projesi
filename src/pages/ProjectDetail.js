import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

// Proje görsellerini import edelim
import image1 from '../assets/image-46acf5070c2b1eabe533e70cdfd6db0920cb88be.png';
import image2 from '../assets/image-ae5d91180b98e9e0920120c3b24ffbfe143d83cd.png';
import image3 from '../assets/image-3879de03212eab7e4fafca5165c55a151eca4a48.png';
import image4 from '../assets/image-7f90acac1fbd66440efa4e3870e0cd0b032f803b.png';
import image5 from '../assets/image-b15b0bea6c6f30cc354e8fe19b0d226e83daf314.png';
import image6 from '../assets/image-69fd8f8e8891be0346bd7faea3a5ad6130b18107.png';

// Örnek proje verileri
const projectsData = {
  '1': {
    title: 'Proje 1: Kurumsal Kimlik Tasarımı',
    category: 'UI, Art Direction',
    image: image1,
    description: 'Bu proje, köklü bir teknoloji firması için gerçekleştirilen kapsamlı bir kurumsal kimlik yenileme çalışmasıdır. Markanın modern, yenilikçi ve kullanıcı dostu yüzünü yansıtacak bir tasarım dili oluşturulmuştur. Logo, renk paleti, tipografi ve dijital varlıklar, markanın temel değerleri göz önünde bulundurularak sıfırdan tasarlanmıştır.',
    details: [
      'Kullanıcı araştırması ve rakip analizi yapıldı.',
      'Modern ve ölçeklenebilir bir logo tasarlandı.',
      'Web sitesi ve mobil uygulama için UI/UX prensiplerine uygun arayüzler geliştirildi.',
      'Sosyal medya ve pazarlama materyalleri için görsel şablonlar oluşturuldu.'
    ]
  },
  '2': {
    title: 'Proje 2: Mobil Bankacılık Uygulaması',
    category: 'UI/UX, Mobile App Design',
    image: image5, // Görseli Proje 5'inki ile değiştirdim
    description: 'Bu proje, kullanıcıların bankacılık işlemlerini kolayca ve güvenli bir şekilde yapabilmelerini sağlayan modern bir mobil uygulama tasarımıdır. Kullanıcı deneyimi (UX) araştırmaları sonucunda, karmaşık bankacılık işlemleri basitleştirilmiş ve sezgisel bir arayüz (UI) oluşturulmuştur.',
    details: [
      'Hedef kitle analizi ve kullanıcı senaryoları oluşturuldu.',
      'Wireframe ve interaktif prototipler hazırlandı.',
      'Kullanılabilirlik testleri ile kullanıcı geri bildirimleri toplandı.',
      'iOS ve Android platformları için tutarlı bir tasarım sistemi geliştirildi.'
    ]
  },
  '3': {
    title: 'Proje 3: Sağlık ve Wellness Uygulaması',
    category: 'Mobile App Design, Health',
    image: image4,
    description: 'Kullanıcıların günlük su tüketimini, egzersizlerini ve meditasyon alışkanlıklarını takip etmelerine yardımcı olan bir mobil uygulama projesidir. Pozitif ve motive edici bir kullanıcı deneyimi sunarak, sağlıklı yaşam hedeflerine ulaşmayı kolaylaştırmak amaçlanmıştır.',
    details: [
      'Oyunlaştırma (gamification) elementleri ile kullanıcı motivasyonu artırıldı.',
      'Kişiselleştirilmiş hatırlatıcılar ve bildirimler tasarlandı.',
      'Veri görselleştirme ile kullanıcıların ilerlemesi grafiksel olarak sunuldu.',
      'Sade ve rahatlatıcı bir arayüz tasarımı tercih edildi.'
    ]
  },
  '4': { 
    title: 'Proje 4: E-Ticaret Platformu Yeniden Tasarımı',
    category: 'Web Design, UX Research',
    image: image6, // Görseli Proje 6'nınki ile değiştirdim
    description: 'Moda sektöründe faaliyet gösteren bir e-ticaret sitesinin, kullanıcı etkileşimini ve satışları artırmak amacıyla baştan sona yeniden tasarlanması projesidir. Analitik veriler ve kullanıcı geri bildirimleri ışığında, ürün bulma ve satın alma süreçleri optimize edilmiştir.',
    details: [
      'A/B testleri ile farklı tasarım alternatifleri denendi.',
      'Ödeme süreci basitleştirilerek sepet terk etme oranı düşürüldü.',
      'Kişiselleştirilmiş ürün öneri motoru için arayüz tasarlandı.',
      'Tüm cihazlarla uyumlu (responsive) bir tasarım oluşturuldu.'
    ]
  },
  '5': {
    title: 'Proje 5: Akıllı Seyahat Planlama Uygulaması',
    category: 'UX/UI, Mobile First Design',
    image: image2,
    description: 'Kullanıcıların seyahat rotalarını kolayca oluşturmalarını, konaklama ve aktivite rezervasyonları yapmalarını sağlayan bir mobil öncelikli web uygulaması. Yapay zeka destekli öneri motoru ile kişiselleştirilmiş seyahat planları sunar.',
    details: [
      'Kullanıcıların bütçelerine ve ilgi alanlarına göre kişiselleştirilmiş rota önerileri.',
      'Harita tabanlı arayüz ile lokasyonların kolayca görüntülenmesi.',
      'Uçtan uca rezervasyon yönetimi (uçak, otel, tur).',
      'Çevrimdışı mod için seyahat planlarını kaydetme özelliği.'
    ]
  },
  '6': {
    title: 'Proje 6: Kurumsal Eğitim Platformu',
    category: 'Web Application, UI Design',
    image: image3,
    description: 'Şirketlerin çalışanlarına yönelik online eğitimler düzenlemesini ve takip etmesini sağlayan bir web tabanlı platform. Yönetici paneli, çalışan profilleri ve interaktif ders modülleri içerir.',
    details: [
      'Video, sunum ve testlerden oluşan zengin içerikli ders modülleri.',
      'Çalışanların gelişimini takip etmek için detaylı raporlama ve analiz araçları.',
      'Sertifika programları ve başarı rozetleri ile motivasyon artışı.',
      'Kolay kullanılabilir ve yönetilebilir bir admin paneli tasarımı.'
    ]
  },
};

function ProjectDetail() {
  let { id } = useParams();
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="project-detail">
        <h1>Proje Bulunamadı</h1>
        <p>Aradığınız proje mevcut değil.</p>
        <Link to="/" className="back-link">Ana Sayfaya Dön</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <img src={project.image} alt={project.title} className="project-detail-image" />
      <h1>{project.title}</h1>
      <p className="project-category">{project.category}</p>
      <div className="project-content">
        <p className="project-description">{project.description}</p>
        {project.details && project.details.length > 0 && (
          <div className="project-highlights">
            <h3>Proje Detayları:</h3>
            <ul>
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Link to="/" className="back-link">Tüm Projelere Geri Dön</Link>
    </div>
  );
}

export default ProjectDetail;