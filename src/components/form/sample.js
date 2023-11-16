const sampleData = [
    {
        "_id": "1700103578046",
        "title": "<p><strong>1. Alasan Anda meninggalkan PermataBank.&nbsp; Mohon pillih satu pernyataan yang paling tepat menggambarkan alasan utama Anda meninggalkan PermataBank.</strong></p><p><em>The reason of your leaving PermataBank.&nbsp; Please choose one statement that best describes your main reason leaving PermataBank,</em></p>",
        "section_title": "Section 1",
        "section": 0,
        "next_section_index": 2,
        "sub_section": false,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "choice",
            "option": [
                "Saya memasuki usia pensiun (55 tahun)",
                "Saya memiliki keperluan pribadi yang harus didahulukan (mengikuti keluarga pindah kota, mengurus keluarga, masalah kesehatan, menjalankan wirausaha, dsb.)",
                "Saya memperoleh kesempatan kerja yang lebih baik di tempat lain."
            ],
            "action": [
                "",
                "1",
                ""
            ]
        }
    },
    {
        "_id": "1700103660663",
        "title": "<p><strong>Alasan Pribadi</strong></p>",
        "section_title": "Saya memiliki keperluan pribadi yang harus didahulukan (mengikuti keluarga pindah kota, mengurus keluarga, masalah kesehatan, menjalankan wirausaha, dsb.)",
        "section": 1,
        "next_section_index": "default",
        "sub_section": true,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": true,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "multiple",
            "option": [
                "Kebutuhan/tanggung jawab keluarga",
                "Masalah Kesehatan",
                "Lokasi kerja yang tidak sesuai",
                "Penugasan yang tidak sesuai dengan aspirasi/keinginan pribadi",
                "Melanjutkan pendidikan",
                "Menjalankan wirausaha",
                "Alasan lainnya, mohon sebutkan "
            ],
            "action": [
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            "other_options": true
        }
    },
    {
        "_id": "1700103833162",
        "title": "<p><strong>Mohon berikan penilaian terhadap seluruh penyebab dibawah ini, dan pilihlah 3 penyebab tama Anda meninggalkan PermataBank</strong></p><p><strong><em>Please provide your assessment for all reasons below, and select 3 main reasons for you leaving the bank</em></strong></p>",
        "section_title": "Penyebab Pengunduran Diri Resignation Reason",
        "section": 2,
        "next_section_index": 10,
        "sub_section": false,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "group",
            "option": [
                "Sangat tidak baik",
                "Tidak baik",
                "Baik",
                "Sangat baik"
            ],
            "action": [
                "",
                "",
                "",
                ""
            ]
        },
        "childrens": [
            {
                "label": "Budaya kerja Work culture",
                "_id": "1700103841993"
            },
            {
                "label": "Kepemimpinan Atasan",
                "_id": "1700103858761"
            },
            {
                "label": "Keseimbangan waktu kerja dan pribadi",
                "_id": "1700103869706"
            },
            {
                "label": "Kompensasi dan manfaat kesejahteraan",
                "_id": "1700103882741"
            },
            {
                "label": "Proses kerja (efisiensi, birokrasi, dsb.)",
                "_id": "1700103906878"
            },
            {
                "label": "Pengembangan karir dan keahlian (pelatihan, rotasi atau penugasan)",
                "_id": "1700103909093"
            },
            {
                "label": "Penilaian hasil kerja (keadilan penilaian, ",
                "_id": "1700103916260"
            }
        ],
        "childrens_answer": [
            "",
            "",
            "",
            ""
        ]
    },
    {
        "_id": "1700103959126",
        "title": "<p>Dari pertanyaan di atas, urutkan 3 factor utama yang membuat anda resign?</p>",
        "section_title": "Penyebab Pengunduran Diri Resignation Reason",
        "section": 2,
        "next_section_index": 10,
        "sub_section": false,
        "questionNumber": 2,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "sorting",
            "sorting": [
                "Budaya kerja",
                "Kepemimpinan Atasan",
                "Keseimbangan waktu kerja dan pribadi",
                "Kompensasi dan manfaat kesejahteraan",
                "Proses kerja (efisiensi, birokrasi, dsb.)",
                "Pengembangan karir dan keahlian (pelatihan, rotasi atau penugasan)",
                "Penilaian hasil kerja (keadilan penilaian, transparansi)"
            ],
            "action": [
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
            ],
            "top_to_show": "3"
        },
        "answer": [
            "Budaya kerja",
            "Kepemimpinan Atasan",
            "Keseimbangan waktu kerja dan pribadi",
            "Kompensasi dan manfaat kesejahteraan",
            "Proses kerja (efisiensi, birokrasi, dsb.)",
            "Pengembangan karir dan keahlian (pelatihan, rotasi atau penugasan)",
            "Penilaian hasil kerja (keadilan penilaian, transparansi)"
        ]
    },
    {
        "_id": "1700104089505",
        "title": "<p><strong>Pada masing-masing Faktor, mohon centang 3 hal tama yang paling mempengaruhi Anda dalam bekerja / memilih pekerjaan<em>&nbsp;For each Factors, please tick the 3 main things that most influenced you in working / selecting a job</em></strong></p>",
        "section_title": "Budaya Perusahaan",
        "section": 3,
        "next_section_index": "default",
        "sub_section": true,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": "3",
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "multiple",
            "option": [
                "Kerjasama",
                "Hubungan dengan rekan kerja",
                "Komunikasi antar unit kerja ",
                "Perilaku Karyawan (rasa menghormati, inklusi, politik kantor, pelecehan, dsb)",
                ""
            ],
            "action": [
                "",
                "",
                "",
                "",
                ""
            ],
            "other_options": false
        }
    },
    {
        "_id": "1700104258875",
        "title": "<p><strong>Pada masing-masing Faktor, mohon centang 3 hal tama yang paling mempengaruhi Anda dalam bekerja / memilih pekerjaan<em>&nbsp;</em></strong></p><p><strong><em>For each Factors, please tick the 3 main things that most influenced you in working / selecting a job</em></strong></p>",
        "section_title": "Kepemimpinan Atasan",
        "section": 4,
        "next_section_index": "default",
        "sub_section": true,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "multiple",
            "option": [
                "Pengakuan atas pekerjaan (pujian, promosi, dsb.)"
            ],
            "action": [
                ""
            ],
            "other_options": false
        }
    },
    {
        "_id": "1700104315625",
        "title": "<p><strong>Pada masing-masing Faktor, mohon centang 3 hal tama yang paling mempengaruhi Anda dalam bekerja / memilih pekerjaan<em>&nbsp;</em></strong></p><p><strong><em>For each Factors, please tick the 3 main things that most influenced you in working / selecting a job</em></strong></p>",
        "section_title": "Keseimbangan Waktu Kerja dan Pribadi",
        "section": 5,
        "next_section_index": "default",
        "sub_section": true,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "multiple",
            "option": [
                "Hari dan jam kerja"
            ],
            "action": [
                ""
            ],
            "other_options": false
        }
    },
    {
        "_id": "1700104430122",
        "title": "<p><strong>Pada masing-masing Faktor, mohon centang 3 hal tama yang paling mempengaruhi Anda dalam bekerja / memilih pekerjaan<em>&nbsp;</em></strong></p><p><strong><em>For each Factors, please tick the 3 main things that most influenced you in working / selecting a job</em></strong></p>",
        "section_title": "Kompensasi dan Manfaat Kesejahteraan",
        "section": 6,
        "next_section_index": "default",
        "sub_section": true,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "multiple",
            "option": [
                "Gaji dan Tunjangan"
            ],
            "action": [
                ""
            ],
            "other_options": false
        }
    },
    {
        "_id": "1700104480676",
        "title": "<p><strong>Pada masing-masing Faktor, mohon centang 3 hal tama yang paling mempengaruhi Anda dalam bekerja / memilih pekerjaan<em>&nbsp;</em></strong></p><p><strong><em>For each Factors, please tick the 3 main things that most influenced you in working / selecting a job</em></strong></p>",
        "section_title": "Work Process",
        "section": 7,
        "next_section_index": "default",
        "sub_section": true,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "multiple",
            "option": [
                "Alat kerja dan sumber daya"
            ],
            "action": [
                ""
            ],
            "other_options": false
        }
    },
    {
        "_id": "1700104559408",
        "title": "<p>Pada masing-masing Faktor, mohon centang 3 hal tama yang paling mempengaruhi Anda dalam bekerja / memilih pekerjaan&nbsp;&nbsp;For each Factors, please tick the 3 main things that most influenced you in working / selecting a job</p>",
        "section_title": "Pengembangan Karir",
        "section": 8,
        "next_section_index": "default",
        "sub_section": true,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "multiple",
            "option": [
                "Kesempatan pelatihan dan pengembangan diri"
            ],
            "action": [
                ""
            ],
            "other_options": false
        }
    },
    {
        "_id": "1700105054928",
        "title": "<p><br></p>",
        "section_title": "Manajemen Kinerja",
        "section": 9,
        "next_section_index": "default",
        "sub_section": true,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "multiple",
            "option": [
                "Target kerja (kejelasan, dapat dicapai, dsb.)"
            ],
            "action": [
                ""
            ],
            "other_options": false
        }
    },
    {
        "_id": "1700105128746",
        "title": "<p>Mohon jelaskan dengan rinci hal apa yang menurut anda sudah diterapkan dengan baik oleh Bank Permata pada saat ini</p><p><br></p>",
        "section_title": "Pertanyaan tambahan",
        "section": 10,
        "next_section_index": "default",
        "sub_section": false,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "paragraph"
        }
    },
    {
        "_id": "1700105144225",
        "title": "<p>Mohon berikan saran atau masukan terperinci agar Bank Permata dapat menjadi lebih baik ke depannya.</p><p><br></p>",
        "section_title": "Pertanyaan tambahan",
        "section": 10,
        "next_section_index": "default",
        "sub_section": false,
        "questionNumber": 2,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "paragraph"
        }
    },
    {
        "_id": "1700105163257",
        "title": "<p>Apa yang membuat Anda tertarik dengan Pemberi Kerja/Perusahaan yang berikutnya?</p>",
        "section_title": "Pertanyaan tambahan",
        "section": 10,
        "next_section_index": "default",
        "sub_section": false,
        "questionNumber": 3,
        "descriptions": "Mohon diisi bila Anda memilih alasan Utama “Kesempatan kerja lebih baik di tempat lain.",
        "required": true,
        "other_options": true,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "choice",
            "option": [
                "Kompensasi dan Benefit",
                "Pengembangan karir",
                ""
            ],
            "action": [
                "",
                "",
                ""
            ]
        }
    },
    {
        "_id": "1700105239595",
        "title": "<p>Apakah Anda bersedia untuk bergabung kembali dengan Bank Permata?&nbsp; </p>",
        "section_title": "Pertanyaan tambahan",
        "section": 10,
        "next_section_index": "default",
        "sub_section": false,
        "questionNumber": 4,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "choice",
            "option": [
                "Yes",
                "No",
                ""
            ],
            "action": [
                "",
                "",
                ""
            ]
        }
    },
    {
        "_id": "1700105255964",
        "title": "<p>Apakah anda akan merekomendasikan Bank Permata sebagai tempat untuk bekerja kepada teman, keluarga dan relasi terdekat Anda?</p><p><br></p>",
        "section_title": "Pertanyaan tambahan",
        "section": 10,
        "next_section_index": "default",
        "sub_section": false,
        "questionNumber": 5,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "EXIT INTERVIEW QUESTIONS – DRAFT PROPOSAL",
        "form": {
            "type": "scale",
            "start": "1",
            "to": "10"
        }
    }
]
export default sampleData;