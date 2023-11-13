const sampleData = [
    {
        "_id": "1699588603471",
        "title": "<p>Pilih Salah Satu Jawaban</p>",
        "section_title": "Section Pertama",
        "section": 0,
        "next_section_index": 2,
        "sub_section": false,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "Survey Title",
        "form": {
            "type": "choice",
            "option": [
                "A",
                "B"
            ],
            "action": [
                "",
                "1"
            ]
        }
    },
    {
        "_id": "1699588636770",
        "title": "<p>Survey</p>",
        "section_title": "Section 2 adalah Sub Section, Bisa dari Choices Be akses Ke sini",
        "section": 1,
        "next_section_index": "default",
        "sub_section": true,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "Survey Title",
        "form": {
            "type": "choice",
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
        }
    },
    {
        "_id": "1699588658655",
        "title": "<p>Multiple Choices tapi Bisa Loncat Loncat</p>",
        "section_title": "Section 3",
        "section": 2,
        "next_section_index": 5,
        "sub_section": false,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "Survey Title",
        "form": {
            "type": "multiple",
            "option": [
                "A",
                "B",
                "C"
            ],
            "other_options": false
        }
    },
    {
        "_id": "1699588776491",
        "title": "<p>Pertanyaan Section 4</p>",
        "section_title": "Section 4",
        "section": 3,
        "next_section_index": "default",
        "sub_section": true,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "Survey Title",
        "form": {
            "type": "choice",
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
        }
    },
    {
        "_id": "1699588764291",
        "title": "<p>Question Section 5</p>",
        "section_title": "Section 5",
        "section": 4,
        "next_section_index": "default",
        "sub_section": true,
        "questionNumber": 1,
        "descriptions": "",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "Survey Title",
        "form": {
            "type": "choice",
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
        }
    },
    {
        "_id": "1699588750039",
        "title": "<p>Survey 6</p>",
        "section_title": "Last Section",
        "section": 5,
        "next_section_index": "default",
        "sub_section": false,
        "questionNumber": 1,
        "descriptions": "Survey",
        "required": true,
        "other_options": false,
        "min_to_select": 1,
        "max_to_select": 10,
        "survey_title": "Survey Title",
        "form": {
            "type": "choice",
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
        }
    }
]

export default sampleData;