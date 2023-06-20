import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            it: {
                translation: {
                    hero: {
                        headerTop: 'C1 in 3 mesi o',
                        headerBottom: 'vieni rimborsato',
                        benefits: {
                            first: {
                                initial: "Tutor",
                                bold: 'madrelingua',
                                final: 'Inglese certificati'
                            },
                            second: {
                                initial: "Lezioni",
                                bold: 'quando vuoi,',
                                final: 'anche nel weekend'
                            },
                            third: {
                                initial: "Costa",
                                bold: 'molto meno',
                                final: 'delle scuole di inglese'
                            },
                        }
                    },
                    form: {
                        firstName: 'Nome',
                        surname: 'Cognome',
                        phone: 'Telefono',
                        email: 'Email',
                        checkBoxPrivacy: {
                            initial: 'Accetto la',
                            colorChange: 'Privacy Policy',
                        },
                        buttonInfo: 'Richiedi info',
                        placeHolder:{
                            firstName: 'Mario',
                            surname: 'Rossi',
                            email: 'mariorossi@email.com',
                        },
                    },
                    statistics: {
                        first: {
                            left: {
                                initial: 'Tutor madrelingua',
                                final: 'inglese certificati',
                            },
                            right: 'Incontri di conversazione, grammatica, pronuncia e vocabolario con Tutor certificati con 1000+ ore di insegnamento.',
                        },
                        second: {
                            left: {
                                initial: '87',
                                bold: 'su',
                                final: '100',
                                paragraph: 'prendono il c1'
                            },
                            right: 'Lezioni ad hoc sull’esame Cambridge IELTS che hanno l’obiettivo di velocizzare i tempi di preparazione.',
                        },
                        third: {
                            left: {
                                initial: "98%",
                                paragraph: 'Clienti contenti del servizio',
                            },
                            right: "Se non ottieni la certificazione C1 ti rimborsiamo il 100% delcosto del corso.",
                        }
                    },
                    testimonies: {
                        title: 'Ecco cosa dicono di noi'
                    },
                    approved: {
                        title: 'Come funziona il percorso?',
                        first: {
                            initial: 'Lezioni online e',
                            final: 'orari a tua scelta',
                        },
                        second: {
                            initial: 'Classi da massimo',
                            final: '3 persone',
                        },
                        third: {
                            initial: 'App con simulatore',
                            final: 'd’esame',
                        },
                        fourth: {
                            initial: 'Preparazione esami',
                            final: 'IELTS Cambridge',
                        },
                        fifth: {
                            initial: 'Tutor madrelingua',
                            final: 'inglesi certificati',
                        },
                        sixth: {
                            initial: 'Certificato o ',
                            final: 'rimborsato',
                        },
                    }
                }
            },
            en: {
                translation: {
                    hero: {
                        headerTop: 'C1 in 3 months or',
                        headerBottom: 'get reimbursed',
                        benefits: {
                            first: {
                                initial: "Certified",
                                bold: 'mother tongue',
                                final: 'English tutors'
                            },
                            second: {
                                initial: "Lessons",
                                bold: 'whenever you want,',
                                final: 'even on weekends'
                            },
                            third: {
                                initial: "Costs",
                                bold: 'much less',
                                final: 'than English schools'
                            }
                        }
                    },
                    form: {
                        firstName: 'Name',
                        surname: 'Surname',
                        phone: 'Phone',
                        email: 'Email',
                        checkBoxPrivacy: {
                            initial: 'I accept the',
                            colorChange: 'Privacy Policy',
                        },
                        buttonInfo: 'Request info',
                        placeHolder:{
                            firstName: 'John',
                            surname: 'Doe',
                            email: 'johndoe@email.com',
                        },
                    },
                    statistics: {
                        first: {
                            left: {
                                initial: 'Mother tongue',
                                final: 'English tutors',
                            },
                            right: 'Conversation, grammar, pronunciation, and vocabulary sessions with certified tutors with 1000+ hours of teaching experience.'
                        },
                        second: {
                            left: {
                                initial: '87',
                                bold: 'of',
                                final: '100',
                                paragraph: 'achieve level C1'
                            },
                            right: 'Tailored lessons on the Cambridge IELTS exam aimed at accelerating preparation time.',
                        },
                        third: {
                            left: {
                                initial: "98%",
                                paragraph: 'Satisfied customers',
                            },
                            right: "If you don't obtain the C1 certification, we will refund 100% of the course cost.",
                        }
                    },
                    testimonies: {
                        title: "Here's what our students say about us."
                    },
                    approved: {
                        title: 'How does the program works?',
                        first: {
                            initial: 'Online lessons and',
                            final: 'flexible schedules',
                        },
                        second: {
                            initial: 'Maximum class size',
                            final: 'of 3 people',
                        },
                        third: {
                            initial: 'App with exam',
                            final: 'simulator',
                        },
                        fourth: {
                            initial: 'Exam preparation',
                            final: 'for IELTS Cambridge',
                        },
                        fifth: {
                            initial: 'Mother tongue',
                            final: 'certified English tutors',
                        },
                        sixth: {
                            initial: 'Certified or',
                            final: 'refund guaranteed',
                        },
                    }
                }
            },
            es: {
                translation: {
                    hero: {
                        headerTop: 'C1 en 3 meses o',
                        headerBottom: 'te reembolsamos',
                        benefits: {
                            first: {
                                initial: "Tutor",
                                bold: 'hablante nativo',
                                final: 'de inglés certificado'
                            },
                            second: {
                                initial: "Lecciones",
                                bold: 'cuando quieras,',
                                final: 'incluso en el fin de semana'
                            },
                            third: {
                                initial: "Cuesta",
                                bold: 'mucho menos',
                                final: 'que otras escuelas de inglés'
                            },
                        }
                    },
                    form: {
                        firstName: 'Nombre',
                        surname: 'Apellido',
                        phone: 'Teléfono',
                        email: 'Email',
                        checkBoxPrivacy: {
                            initial: 'Acepto la',
                            colorChange: 'Privacy Policy',
                        },
                        buttonInfo: 'SOLICITAR INFO',
                        placeHolder:{
                            firstName: 'Juan',
                            surname: 'Pérez',
                            email: 'juanpérez@email.com',
                        },
                    },
                    statistics: {
                        first: {
                            left: {
                                initial: 'tutor nativo hablante',
                                final: 'de inglés certificados',
                            },
                            right: 'Encuentros de conversación, gramática, pronunciación y vocabulario con tutores certificados con 1000+ horas de enseñamiento.',
                        },
                        second: {
                            left: {
                                initial: '87',
                                bold: 'de',
                                final: '100',
                                paragraph: 'obtienen el C1'
                            },
                            right: 'Lecciones ad hoc del examen Cambridge IELTS con el objetivo de acelerar el tiempo para preparar el examen.',
                        },
                        third: {
                            left: {
                                initial: "98%",
                                paragraph: 'Clientes contentos de nuestros servicios',
                            },
                            right: "Si no obtienes la certificación te reembolsamos el 100% del costo del curso.",
                        }
                    },
                    testimonies: {
                        title: 'Lo que nuestros estudiantes dicen de nosotros'
                    },
                    approved: {
                        title: '¿Cómo funciona el curso?',
                        first: {
                            initial: 'Lecciones online con',
                            final: 'horarios de tu elección',
                        },
                        second: {
                            initial: 'Clases de máximo',
                            final: '3 estudiantes',
                        },
                        third: {
                            initial: 'App con simulador',
                            final: 'del examen',
                        },
                        fourth: {
                            initial: 'Preparación de exámenes',
                            final: 'para IELTS Cambridge.',
                        },
                        fifth: {
                            initial: 'Tutor nativo hablante',
                            final: 'inglés certificado',
                        },
                        sixth: {
                            initial: 'Certificado o',
                            final: 'reembolso',
                        },
                    }
                }
            },
            fr: {
                translation: {
                    hero: {
                        headerTop: 'C1 en trois mois ou',
                        headerBottom: 'vous serez remboursé',
                        benefits: {
                            first: {
                                initial: "Professeurs",
                                bold: 'natifs',
                                final: 'd’Anglais certifiés'
                            },
                            second: {
                                initial: "Horaires",
                                bold: 'flexibles,',
                                final: 'week-ends inclus'
                            },
                            third: {
                                initial: "Beaucoup moins",
                                bold: 'cher par rapport à',
                                final: 'd’autres écoles d’anglais'
                            },
                        }
                    },
                    form: {
                        firstName: 'Prénom',
                        surname: 'Nom',
                        phone: 'Téléphone',
                        email: 'Adresse mail',
                        checkBoxPrivacy: {
                            initial: 'J’accepte la',
                            colorChange: 'Privacy Policy',
                        },
                        buttonInfo: 'POUR PLUS D’INFOS CLIQUEZ ICI',
                        placeHolder:{
                            firstName: 'Jean',
                            surname: 'Dupont',
                            email: 'jeandupont@email.com',
                        },
                    },
                    statistics: {
                        first: {
                            left: {
                                initial: 'professeurs natifs',
                                final: 'd’anglais certifiés',
                            },
                            right: 'Cours de conversation, grammaire, prononciation et vocabulaire avec des professeurs certifiés qui ont plus de 1000 heures d’enseignement.',
                        },
                        second: {
                            left: {
                                initial: '87',
                                bold: 'sur',
                                final: '100',
                                paragraph: 'obtiennent le niveau C1'
                            },
                            right: 'Cours ad hoc concernant l’examen Cambridge IELTS dont l’objectif est d’accélérer le temps de préparation de l’examen',
                        },
                        third: {
                            left: {
                                initial: "98%",
                                paragraph: 'De clients contents de notre service',
                            },
                            right: "Si vous n’obtenez pas le certificat de niveau C1, le cours sera 100% remboursé.",
                        }
                    },
                    testimonies: {
                        title: 'Ce que nos étudiants disent de nous'
                    },
                    approved: {
                        title: 'Comment se déroule notre cours d’anglais ?',
                        first: {
                            initial: 'Cours en ligne',
                            final: 'et horaires flexibles',
                        },
                        second: {
                            initial: 'Classes de maximum',
                            final: '3 étudiants',
                        },
                        third: {
                            initial: 'Examens blancs sur',
                            final: 'l’appli Edusogno',
                        },
                        fourth: {
                            initial: 'Préparation à l’examen',
                            final: 'Cambridge IELTS',
                        },
                        fifth: {
                            initial: 'Professeurs natifs',
                            final: 'd’anglais certifiés',
                        },
                        sixth: {
                            initial: 'Certifié ou',
                            final: 'remboursé',
                        },
                    }
                }
            },
        }
    });

export default i18n;