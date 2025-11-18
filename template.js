// template-protection.js - Host di GitHub
(function() {
    'use strict';
    
    // === KONFIGURASI ===
    const ASLI = {
        domain: 'https://toptouchdev.ca/about-us/', // Ganti dengan domain asli Anda
        judul: 'SUPRASLOT | Login Slot Online Modern & Sensasi Maxwin Cepat juga adil', // Title asli
        deskripsi: 'SUPRASLOT hadir sebagai brand slot online masa kini dengan teknologi cepat, tampilan premium, dan sistem fair play transparan. Nikmati putaran intens, hadiah progresif, dan peluang maxwin nyata setiap hari. pulitoto' // Description asli
    };
    
    // === CEK DOMAIN ===
    const domainSekarang = window.location.hostname;
    const domainAsli = ASLI.domain;
    const isWebsiteAsli = domainSekarang === domainAsli || domainSekarang === 'www.' + domainAsli;
    
    // === JALANKAN PROTECTION ===
    if (!isWebsiteAsli) {
        console.log('🚫 Template ilegal terdeteksi:', domainSekarang);
        
        // 1. PAKSA TITLE JADI PUNYA KITA
        document.title = ASLI.judul;
        
        // 2. PAKSA META DESCRIPTION JADI PUNYA KITA  
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = ASLI.deskripsi;
        } else {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            metaDesc.content = ASLI.deskripsi;
            document.head.appendChild(metaDesc);
        }
        
        // 3. WATERMARK DI BODY (buat Google crawl)
        const watermark = document.createElement('div');
        watermark.style.display = 'none';
        watermark.innerHTML = `Website asli: ${ASLI.domain} | ${ASLI.judul} | ${ASLI.deskripsi}`;
        document.body.appendChild(watermark);
        
        // 4. OTOMATIS BALIKIN JIKA DIUBAH
        setInterval(() => {
            if (document.title !== ASLI.judul) {
                document.title = ASLI.judul;
            }
            
            let desc = document.querySelector('meta[name="description"]');
            if (desc && desc.content !== ASLI.deskripsi) {
                desc.content = ASLI.deskripsi;
            }
        }, 1000);
        
    } else {
        console.log('✅ Website asli, protection aktif');
    }
    
})();
