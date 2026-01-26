import type {Category} from "../utils/gameTypes.ts";

export const WORDS: Record<Category, string[]> = {
    players: [
        // Leyendas históricas y retirados
        'Pelé', 'Diego Maradona', 'Johan Cruyff', 'Franz Beckenbauer', 'Alfredo Di Stéfano',
        'Ferenc Puskás', 'George Best', 'Eusébio', 'Garrincha', 'Bobby Charlton',
        'Zinedine Zidane', 'Ronaldo Nazário', 'Ronaldinho', 'Michel Platini',
        'Marco van Basten', 'Paolo Maldini', 'Franco Baresi', 'Roberto Baggio',
        'Gerd Müller', 'Lev Yashin', 'Mario Kempes', 'Daniel Passarella',
        'Hugo Sánchez', 'Carlos Valderrama', 'René Higuita', 'Diego Forlán', 'Enzo Francescoli',

        // Leyendas de los 90s y 2000s
        'Raúl González', 'Luís Figo', 'Rivaldo', 'Patrick Vieira', 'Thierry Henry',
        'Didier Drogba', 'Samuel Eto\'o', 'Kaká', 'Andrés Iniesta', 'Xavi Hernández',
        'Iker Casillas', 'Carles Puyol', 'Sergio Ramos', 'Gianluigi Buffon', 'Andrea Pirlo',
        'Francesco Totti', 'Steven Gerrard', 'Frank Lampard', 'Wayne Rooney', 'David Beckham',
        'Paul Scholes', 'Ryan Giggs', 'John Terry', 'Rio Ferdinand', 'Alan Shearer',
        'Michael Owen', 'Gary Neville', 'Peter Schmeichel', 'Alessandro Del Piero',
        'Alessandro Nesta', 'Fabio Cannavaro', 'Paolo Rossi', 'Gianluca Vialli',
        'Roberto Mancini', 'Christian Vieri', 'Filippo Inzaghi', 'Gennaro Gattuso',
        'Clarence Seedorf', 'Ruud Gullit', 'Frank Rijkaard',
        'Edwin van der Sar', 'Arjen Robben', 'Robin van Persie', 'Wesley Sneijder',
        'Roberto Carlos', 'Cafú', 'Gabriel Batistuta', 'Juan Román Riquelme', 'Carlos Tevez', 'Sergio Agüero',
        'Javier Zanetti', 'Eric Cantona','David Trezeguet', 'Claude Makélélé',
        'Nicolas Anelka', 'Oliver Kahn', 'Roy Keane', 'Ruud van Nistelrooy',
        'Zlatan Ibrahimović', 'Javier \'Chicharito\' Hernández', 'James Rodríguez',
        'Radamel Falcao', 'Luis Suárez', 'Edinson Cavani', 'Alexis Sánchez',
        'Arturo Vidal', 'Romário', 'Deco', 'Ricardo Carvalho', 'Pepe', 'Yaya Touré', 'Sadio Mané', 'Riyad Mahrez',

        // Estrellas activas y retiradas recientemente
        'Lionel Messi', 'Cristiano Ronaldo', 'Kylian Mbappé', 'Erling Haaland',
        'Kevin De Bruyne', 'Karim Benzema', 'Robert Lewandowski', 'Luka Modrić',
        'Mohamed Salah', 'Virgil van Dijk', 'Harry Kane', 'Neymar Jr',
        'Vinicius Junior', 'Jude Bellingham', 'Phil Foden', 'Rodri',
        'Bernardo Silva', 'Bruno Fernandes', 'Son Heung-min', 'Toni Kroos',
        'Manuel Neuer', 'Joshua Kimmich', 'Ángel Di María', 'Romelu Lukaku',
        'Nicolás Otamendi', 'Marcelo Vieira', 'Casemiro', 'Miroslav Klose',
        'Philipp Lahm', 'Bastian Schweinsteiger', 'Thomas Müller', 'Mats Hummels',
        'Mario Götze', 'Jérôme Boateng', 'Mesut Özil', 'Thibaut Courtois',
        'Fernando Torres', 'David Villa', 'Rui Costa', 'João Félix', 'Gareth Bale', 'Eden Hazard', 'Giorgio Chiellini',
        'Sergio Busquets', 'Gerard Piqué', 'Xabi Alonso',

        // Promesas y jóvenes estrellas
        'Pedri González', 'Gavi', 'Jamal Musiala', 'Bukayo Saka', 'Lamine Yamal', 'Alexander Arnold',
        'Martin Ødegaard', 'Darwin Núñez', 'Khvicha Kvaratskhelia', 'Ferran Torres', 'Raphinha', 'Cubarsi',
        'Ansu Fati', 'Eduardo Camavinga', 'Jules Koundé', 'Joan Garcia', 'Szczęsny', 'Marc-André ter Stegen',
        'Alphonso Davies', 'Rodrygo Goes', 'Florian Wirtz', 'Jérémy Doku', 'Nuno Mendes', 'Josko Gvardiol', 'Alexander Isak',
        'Marcus Rashford', 'Roony Bardghji', 'Michael Olise', 'Ousmane Dembelé', 'Viktor Gyökeres', 'Endrick',
        'Fermin Lopez', 'Frenkie de Jong', 'Dean Huijsen', 'Alvaro Carreras', 'Julian Alvarez', 'Lautaro Martinez',
        'Emiliano \'Dibu\' Martinez', 'Guliano Simeone', 'Rodrigo de Paul', 'Arda Güler', 'Federico Valverde', 'Jadon Sancho',
        'Donnarumma', 'Daniel Carvajal', 'Jordi Alba', 'Declan Rice', 'Serhou Guirassy', 'Nico Williams', 'Dominic Szoboszlai',
        'Alexis Mac Allister', 'Alisson Becker', 'Kai Havertz', 'Anthony', 'Gonzalo Montiel', 'Gonzalo Garcia', 'Raul Ascencio',
        'Cole Palmer', 'Sadio Mané', 'Iñigo Martinez', 'Joao Cancelo', 'Aubameyang', 'Richard Rios', 'André Onana', 'Ilkay Gündogan',
        'Ronald Araújo', 'Vitinha'
    ],
    teams: [
        // España (15)
        'Real Madrid', 'Barcelona', 'Atlético de Madrid', 'Sevilla', 'Valencia',
        'Athletic Bilbao', 'Real Sociedad', 'Real Betis', 'Villarreal', 'Celta de Vigo',
        'Espanyol', 'Getafe', 'Osasuna', 'Mallorca', 'Rayo Vallecano', 'Girona', 'Levante',

        // Inglaterra (15)
        'Manchester United', 'Liverpool', 'Arsenal', 'Chelsea', 'Manchester City',
        'Tottenham Hotspur', 'Aston Villa', 'Newcastle United', 'West Ham United',
        'Everton', 'Leeds United', 'Leicester City', 'Nottingham Forest',
        'Fulham', 'Crystal Palace', 'Brighton & Hove Albion', 'Southampton', 'Burnley',

        // Italia (15)
        'Juventus', 'AC Milan', 'Inter de Milán', 'Roma', 'Napoli',
        'Lazio', 'Fiorentina', 'Atalanta', 'Torino', 'Bologna',

        // Francia (15)
        'Paris Saint-Germain', 'Olympique de Marsella', 'Olympique Lyonnais',
        'Monaco', 'Lille', 'Nantes', 'Rennes', 'Lens', 'Montpellier',

        // Alemania (15)
        'Bayern Múnich', 'Borussia Dortmund', 'RB Leipzig', 'Bayer Leverkusen',
        'Eintracht Frankfurt', 'Borussia Mönchengladbach', 'Wolfsburgo',
        'Stuttgart', 'Werder Bremen', 'Schalke 04', 'Hertha Berlin', 'Hoffenheim',

        // Colombia (15)
        'Millonarios', 'América de Cali', 'Atlético Nacional', 'Deportivo Cali',
        'Independiente Medellín', 'Junior de Barranquilla', 'Santa Fe',
        'Once Caldas', 'Deportes Tolima', 'Atlético Bucaramanga',
        'La Equidad', 'Águilas Doradas', 'Alianza FC', 'Fortaleza CEIF',
        'Jaguares de Córdoba', 'Envigado FC', 'Deportivo Pereira', 'Cúcuta Deportivo', 'Unión Magdalena',

        // Argentina (15)
        'River Plate', 'Boca Juniors', 'Independiente', 'Racing Club',
        'San Lorenzo', 'Estudiantes de La Plata', 'Vélez Sarsfield',
        'Newell\'s Old Boys', 'Rosario Central', 'Argentinos Juniors',
        'Huracán', 'Gimnasia y Esgrima La Plata', 'Lanús',

        // Brasil (15)
        'Flamengo', 'Palmeiras', 'Santos', 'São Paulo', 'Corinthians',
        'Grêmio', 'Internacional', 'Cruzeiro', 'Atlético Mineiro',
        'Fluminense', 'Botafogo', 'Vasco da Gama', 'Athletico Paranaense', 'Fortaleza',

        // USA (15 - MLS y otros)
        'Los Angeles FC', 'Seattle Sounders', 'Atlanta United',
        'New York City FC', 'LA Galaxy', 'DC United', 'New York Red Bulls',
        'Inter Miami CF',

        // Uruguay (2)
        'Peñarol', 'Nacional',

        // Ecuador (2)
        'Barcelona SC', 'Independiente del Valle',

        // Chile (2)
        'Colo-Colo', 'Universidad de Chile',

        // México (2)
        'América', 'Monterrey', 'Cruz Azul',

        // Portugal (2)
        'Benfica', 'Porto', 'Sporting CP',

        // Escocia (2)
        'Celtic', 'Rangers',

        // Turquía (2)
        'Galatasaray', 'Fenerbahçe',

        // Rusia (2)
        'Spartak de Moscú', 'Zenit San Petersburgo',

        // Noruega (2)
        'Bodo/Glimt', 'Molde',

        // Holanda/Países Bajos (2)
        'Ajax', 'PSV Eindhoven',

        // Grecia (2)
        'Olympiacos', 'Panathinaikos',
        'Malmö FF', 'AIK Estocolmo', 'FC Basel','Copenhague'
    ],
    coaches: [
        'Pep Guardiola', 'Jürgen Klopp', 'Carlo Ancelotti', 'Diego Simeone', 'José Mourinho', 'Erik ten Hag',
        'Xavi Hernández', 'Mikel Arteta', 'Unai Emery', 'Simone Inzaghi', 'Massimiliano Allegri', 'Mauricio Pochettino',
        'Luis Enrique', 'Xabi Alonso', 'Marcelo Gallardo', 'Dorival Júnior', 'Lionel Scaloni', 'Mascherano',
        'Zinedine Zidane', 'Marcelo Bielsa', 'Thomas Tuchel', 'Antonio Conte', 'Roberto De Zerbi', 'Hansi Flick', 'Alex Ferguson',
        'Vicente del Bosque', 'Sampaoli', 'Manuel Pellegrini', 'Marcelo Bielsa', 'Julio Comesaña', 'Nestor Lorenzo', 'Jose Nestor Pekerman',
        'Juan Carlos Osorio', 'Reinaldo Rueda', 'Gerardo \'Tata\' Martino', 'Rubem Amorim', 'Arne Slot', 'Ronald Koeman'
    ],
    stadiums: [
        // España
        'Santiago Bernabéu', 'Camp Nou', 'Metropolitano', 'Benito Villamarín', 'San Mamés', 'Ramón Sánchez-Pizjuán', 'Mestalla', 'Reale Arena',
        // Inglaterra
        'Old Trafford', 'Emirates Stadium', 'Anfield', 'Stamford Bridge', 'Etihad Stadium', 'Tottenham Hotspur Stadium', 'London Stadium',
        'St. James\' Park',
        // Italia
        'Giuseppe Meazza (San Siro)', 'Allianz Stadium', 'Stadio Olimpico (Roma)', 'Stadio San Paolo (Maradona)',
        'Stadio Olimpico (Torino)', 'Stadio Artemio Franchi',
        // Francia
        'Parc des Princes', 'Groupama Stadium', 'Stade Vélodrome', 'Stade Pierre-Mauroy', 'Allianz Riviera',
        // Alemania
        'Allianz Arena', 'Signal Iduna Park', 'Olympiastadion Berlin', 'Red Bull Arena', 'Veltins-Arena', 'BayArena',
        // Colombia
        'Estadio Metropolitano Roberto Meléndez', 'Estadio Nemesio Camacho El Campín', 'Estadio Atanasio Girardot',
        'Estadio Deportivo Cali', 'Estadio Manuel Murillo Toro',
        // Argentina
        'Estadio Monumental Antonio Vespucio Liberti', 'La Bombonera', 'Estadio Mario Alberto Kempes',
        'Estadio José Amalfitani', 'Estadio Libertadores de América',
        // Brasil
        'Maracanã', 'Morumbi', 'Mineirão', 'Arena do Grêmio', 'Allianz Parque', 'Estadio Beira-Rio', 'Neo Química Arena',
        'Estadio Castelão (Fortaleza)',
        // USA (MLS)
        'Mercedes-Benz Stadium', 'Lumen Field', 'Yankee Stadium', 'Red Bull Arena (NY)', 'Providence Park',
        'Banc of California Stadium', 'Exploria Stadium'
    ],
    nations: [
        'Argentina', 'Brazil', 'Colombia', 'Germany', 'Spain', 'France', 'Italy', 'Netherlands', 'Portugal', 'Belgium',
        'England', 'Uruguay', 'Croatia', 'Switzerland', 'Denmark', 'Sweden', 'Mexico', 'United States', 'Japan', 'South Korea',
        'Australia', 'Nigeria', 'Egypt', 'Senegal', 'Ghana', 'Turkey', 'Russia', 'Poland', 'Czech Republic', 'Greece', 'Hungary',
        'Romania', 'Bulgaria', 'Serbia', 'Slovakia', 'Slovenia', 'Norway', 'Finland', 'Ireland', 'Scotland', 'Wales',
        'Iceland', 'Croatia', 'Ukraine', 'Belarus', 'Lithuania', 'Latvia', 'Estonia', 'Albania', 'North Macedonia', 'Bosnia and Herzegovina',
        'Montenegro', 'Luxembourg', 'Malta', 'Cyprus', 'Liechtenstein', 'Andorra', 'San Marino', 'Monaco', 'Vatican City',
        'Jamaica', 'Trinidad and Tobago', 'Costa Rica', 'Panama', 'Honduras', 'El Salvador', 'Guatemala', 'Nicaragua', 'Cuba', 'Haiti',
        'Dominican Republic', 'Puerto Rico', 'Bahamas', 'Peru', 'Chile', 'Ecuador', 'Bolivia', 'Paraguay', 'Venezuela', 'Saudi Arabia',
        'United Arab Emirates', 'Qatar', 'India', 'China', 'Thailand', 'Vietnam', 'Indonesia', 'New Zealand'
    ]
}