import {Movie} from "./types";

const data: Movie[] = [
    {
        title: "Avatar 2: El Camino del Agua",
        synopsis: "En Avatar: El sentido del agua, secuela de Avatar (2009), nos trasladamos diez años después de la primera batalla de Pandora entre los Na'vi y los humanos, Jake Sully (Sam Worthington) vive tranquilamente con su familia y su tribu. Él y Ney'tiri han formado una familia y hacen todo lo posible por permanecer juntos, debido a los problemas matrimoniales y a los roles que cada uno debe que desempeñar dentro de la tribu. Sin embargo, deben abandonar su hogar y explorar diferentes e inhospitas regiones de Pandora, adentrándose en el mar y haciendo pactos con otros Na'vi de dichas regiones.@78salto86@Cuando una antigua amenaza resurge, Jake debe volver a librar una difícil guerra contra los humanos. Pese a la adversidad, Jake acaba haciendo nuevos aliados, algunos de los cuales ya viven entre los Na'vi y otros con nuevos avatares. Con una nueva guerra en marcha, Jake y Ney'tiri tendrán que hacer todo lo posible para permanecer juntos y cuidar de su familia y su tribu.",
        details: {
            director: "James Cameron",
            durationInMinutes: 192,
            genre: [
                "Ciencia ficción",
                "Aventuras",
                "Fantástico",
                "Acción",
            ],
            language: "Inglés",

        },
        thumbnailSrc: "/fake-api-assets/avatar2.thumb.jpg",
        heroImgSrc: "/fake-api-assets/avatar2.hero.jpg",
        functionsDate: [
            new Date(2022, 11, 22, 17, 30).toJSON(),
            new Date(2022, 11, 23, 17, 30).toJSON(),
            new Date(2022, 11, 24, 17, 30).toJSON(),
            new Date(2022, 11, 25, 17, 30).toJSON(),
        ],
        trailerUrl: "http://google.com",
    },

    {
        title: "Los Increíbles",
        synopsis: 'Bob Parr era uno de los más grandes superhéroes del mundo (también se le conocía como "Mr. Increíble"), salvaba vidas y luchaba contra villanos a diario. Han pasado 15 años, y Bob y su mujer (una famosa ex-superheroína por derecho propio) han adoptado una identidad civil y se han retirado a la periferia para llevar una vida normal con sus tres hijos. Bob se dedica a comprobar los plazos de las reclamaciones de seguros y lucha contra el aburrimiento y los michelines. Está deseando volver a entrar en acción, así que cuando recibe una misteriosa comunicación que le ordena dirigirse a una remota isla para cumplir una misión de alto secreto, no se lo piensa dos veces.',
        details: {
            director: "Brad Bird",
            durationInMinutes: 115,
            genre: [
                "Animación",
                "Comedia",
                "Aventuras",
                "Acción",
                "Superhéroes",
                "Familia",
                "Sátira",
            ],
            language: "Español",

        },
        thumbnailSrc: "/fake-api-assets/los-increibles.thumb.jpg",
        heroImgSrc: "/fake-api-assets/los-increibles.hero.jpg",
        functionsDate: [
            new Date(2022, 11, 15, 17, 30).toJSON(),
            new Date(2022, 11, 16, 17, 30).toJSON(),
            new Date(2022, 11, 17, 17, 30).toJSON(),
            new Date(2022, 11, 18, 17, 30).toJSON(),
        ],
        trailerUrl: "http://youtube.com",
    },

    {
        title: "El lobo de Wall Street",
        synopsis: 'Película basada en hechos reales del corredor de bolsa neoyorquino Jordan Belfort (Leonardo DiCaprio). A mediados de los años 80, Belfort era un joven honrado que perseguía el sueño americano, pero pronto en la agencia de valores aprendió que lo más importante no era hacer ganar a sus clientes, sino ser ambicioso y ganar una buena comisión. Su enorme éxito y fortuna le valió el mote de “El lobo de Wall Street”. Dinero. Poder. Mujeres. Drogas. Las tentaciones abundaban y el temor a la ley era irrelevante. Jordan y su manada de lobos consideraban que la discreción era una cualidad anticuada; nunca se conformaban con lo que tenían.',
        details: {
            director: "Martin Scorsese",
            durationInMinutes: 179,
            genre: [
                "Comedia",
                "Drama",
                "Comedia negra",
                "Biográfico",
                "Bolsa y negocios",
            ],
            language: "Español",

        },
        thumbnailSrc: "/fake-api-assets/lobo-wall-street.thumb.jpg",
        heroImgSrc: "/fake-api-assets/lobo-wall-street.hero.jpg",
        functionsDate: [
            new Date(2022, 11, 4, 17, 30).toJSON(),
            new Date(2022, 11, 5, 17, 30).toJSON(),
            new Date(2022, 11, 6, 17, 30).toJSON(),
            new Date(2022, 11, 7, 17, 30).toJSON(),
        ],
        trailerUrl: "http://m.facebook.com",
    },

    {
        title: "Ratatouille",
        synopsis: 'Remy es una simpática rata que sueña con convertirse en un gran chef francés a pesar de la oposición de su familia y del problema evidente que supone ser una rata en una profesión que detesta a los roedores. El destino lleva a Remy a las alcantarillas de París, donde su situación no puede ser mejor, ya que se encuentra justo debajo de un restaurante que se ha hecho famoso gracias a Auguste Gusteau, una estrella de la nouvelle cuisine. A pesar del peligro que representa ser un visitante poco común (y desde luego nada deseado) en los fogones de un exquisito restaurante francés, la pasión de Remy por la cocina pone patas arriba el mundo culinario parisino en una trepidante y emocionante aventura.',
        details: {
            director: "Brad Bird",
            durationInMinutes: 110,
            genre: [
                "Animación",
                "Comedia",
                "Infantil",
            ],
            language: "Español",

        },
        thumbnailSrc: "/fake-api-assets/ratatouille.thumb.jpg",
        heroImgSrc: "/fake-api-assets/ratatouille.hero.jpg",
        functionsDate: [
            new Date(2023, 0, 4, 17, 30).toJSON(),
            new Date(2023, 0, 5, 17, 30).toJSON(),
            new Date(2023, 0, 6, 17, 30).toJSON(),
            new Date(2023, 0, 7, 17, 30).toJSON(),
        ],
        trailerUrl: "http://ispi4019.com.ar",
    },

    {
        title: "La vida es bella",
        synopsis: 'En 1939, a punto de estallar la Segunda Guerra Mundial (1939-1945), el extravagante Guido llega a Arezzo, en la Toscana, con la intención de abrir una librería. Allí conoce a la encantadora Dora y, a pesar de que es la prometida del fascista Rodolfo, se casa con ella y tiene un hijo. Al estallar la guerra, los tres son internados en un campo de exterminio, donde Guido hará lo imposible para hacer creer a su hijo que la terrible situación que están padeciendo es tan sólo un juego.',
        details: {
            director: "Roberto Benigni",
            durationInMinutes: 117,
            genre: [
                "Comedia",
                "Drama",
            ],
            language: "Español",

        },
        thumbnailSrc: "/fake-api-assets/la-vida-es-bella.thumb.jpg",
        heroImgSrc: "/fake-api-assets/la-vida-es-bella.hero.webp",
        functionsDate: [
            new Date(2023, 0, 10, 17, 30).toJSON(),
            new Date(2023, 0, 11, 17, 30).toJSON(),
            new Date(2023, 0, 12, 17, 30).toJSON(),
            new Date(2023, 0, 13, 17, 30).toJSON(),
        ],
        trailerUrl: "http://instagram.com",
    },

    {
        title: "Toy Story",
        synopsis: 'Los juguetes de Andy, un niño de 6 años, temen que haya llegado su hora y que un nuevo regalo de cumpleaños les sustituya en el corazón de su dueño. Woody, un vaquero que ha sido hasta ahora el juguete favorito de Andy, trata de tranquilizarlos hasta que aparece Buzz Lightyear, un héroe espacial dotado de todo tipo de avances tecnológicos. Woody es relegado a un segundo plano. Su constante rivalidad se transformará en una gran amistad cuando ambos se pierden en la ciudad sin saber cómo volver a casa',
        details: {
            director: "John Lasseter",
            durationInMinutes: 80,
            genre: [
                "Animación",
                "Fantástico",
                "Comedia",
                "Aventuras",
                "Infantil"
            ],
            language: "Español",

        },
        thumbnailSrc: "/fake-api-assets/toy-story.thumb.jpg",
        heroImgSrc: "/fake-api-assets/toy-story.hero.jpg",
        functionsDate: [
            new Date(2023, 0, 20, 17, 30).toJSON(),
            new Date(2023, 0, 21, 17, 30).toJSON(),
            new Date(2023, 0, 22, 17, 30).toJSON(),
            new Date(2023, 0, 23, 17, 30).toJSON(),
        ],
        trailerUrl: "http://infovera.com.ar",
    },

    {
        title: "Up - Una aventura de altura",
        synopsis: 'Carl Fredricksen es un viudo vendedor de globos de 78 años que, finalmente, consigue llevar a cabo el sueño de su vida: enganchar miles de globos a su casa y salir volando rumbo a América del Sur. Pero ya estando en el aire y sin posibilidad de retornar Carl descubre que viaja acompañado de Russell, un explorador que tiene ocho años y un optimismo a prueba de bomba.',
        details: {
            director: "Pete Docter",
            durationInMinutes: 96,
            genre: [
                "Animación",
                "Aventuras",
                "Comedia",
                "Infantil"
            ],
            language: "Español",

        },
        thumbnailSrc: "/fake-api-assets/up.thumb.jpg",
        heroImgSrc: "/fake-api-assets/up.hero.jpg",
        functionsDate: [
            new Date(2023, 0, 26, 17, 30).toJSON(),
            new Date(2023, 0, 27, 17, 30).toJSON(),
            new Date(2023, 0, 28, 17, 30).toJSON(),
            new Date(2023, 0, 29, 17, 30).toJSON(),
        ],
        trailerUrl: "http://outlook.com",
    },

    {
        title: "Monsters, Inc",
        synopsis: 'Monsters Inc. es la mayor empresa de miedo del mundo, y James P. Sullivan es uno de sus mejores empleados. Asustar a los niños no es un trabajo fácil, ya que todos creen que los niños son tóxicos y no pueden tener contacto con ellos. Pero un día una niña se cuela sin querer en la empresa, provocando el caos.',
        details: {
            director: "Pete Docter",
            durationInMinutes: 88,
            genre: [
                "Animación",
                "Comedia",
                "Fantástico",
                "Infantil"
            ],
            language: "Español",

        },
        thumbnailSrc: "/fake-api-assets/monsters-inc.thumb.jpg",
        heroImgSrc: "/fake-api-assets/monsters-inc.hero.webp",
        functionsDate: [
            new Date(2023, 1, 4, 17, 30).toJSON(),
            new Date(2023, 0, 5, 17, 30).toJSON(),
            new Date(2023, 0, 6, 17, 30).toJSON(),
            new Date(2023, 0, 7, 17, 30).toJSON(),
        ],
        trailerUrl: "http://binance.com",
    },
]

export const getMovies = function() {
    return data;
}