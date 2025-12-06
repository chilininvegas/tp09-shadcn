import cm from '@/public/images/cm.jpg'
import tf from '@/public/images/tf.jpg'
import rl from '@/public/images/rl.jpg'
import avatar1 from '@/public/images/avatar1.jpg'

export const data = [
  {
    name: 'Jan',
    office: 86,
    wfh: 57
  },
  {
    name: 'Feb',
    office: 83,
    wfh: 60
  },
  {
    name: 'Mar',
    office: 88,
    wfh: 55
  },
  {
    name: 'Apr',
    office: 71,
    wfh: 72
  },
  {
    name: 'May',
    office: 57,
    wfh: 86
  },
  {
    name: 'Jun',
    office: 86,
    wfh: 57
  },
  {
    name: 'Jul',
    office: 72,
    wfh: 71
  },
  {
    name: 'Aug',
    office: 65,
    wfh: 78
  },
  {
    name: 'Sep',
    office: 60,
    wfh: 83
  },
  {
    name: 'Oct',
    office: 72,
    wfh: 71
  },
  {
    name: 'Nov',
    office: 71,
    wfh: 72
  },
  {
    name: 'Dec',
    office: 72,
    wfh: 71
  }
]

export const teamLeaders = [
  {
    firstName: 'Colin',
    lastName: 'Murray',
    avatar: cm
  },
  {
    firstName: 'Tom',
    lastName: 'Phillips'
  },
  {
    firstName: 'Liam',
    lastName: 'Fuentes'
  },
  {
    firstName: 'Tina',
    lastName: 'Fey',
    avatar: tf
  },
  {
    firstName: 'Katie',
    lastName: 'Johnson'
  },
  {
    firstName: 'Tina',
    lastName: 'Jones'
  },
  {
    firstName: 'Amy',
    lastName: 'Adams'
  },
  {
    firstName: 'Ryan',
    lastName: 'Lopez',
    avatar: rl
  },
  {
    firstName: 'Jenny',
    lastName: 'Jones'
  }
]

export const teamDistData = [
  {
    name: 'Alpha',
    value: 16,
    color: '#3b82f6'
  },
  {
    name: 'Beta',
    value: 16,
    color: '#8b5cf6'
  },
  {
    name: 'Gamma',
    value: 16,
    color: '#ec4899'
  },
  {
    name: 'Delta',
    value: 16,
    color: '#84cc16'
  },
  {
    name: 'Epsilon',
    value: 16,
    color: '#f97316'
  },
  {
    name: 'Zeta',
    value: 16,
    color: '#06b6d4'
  },
  {
    name: 'Eta',
    value: 16,
    color: '#eab308'
  },
  {
    name: 'Theta',
    value: 16,
    color: '#a855f7'
  },
  {
    name: 'Canary',
    value: 15,
    color: '#f43f5e'
  }
]

export const supportTixResolvedData = [
  {
    name: 'Jan',
    delta: 40,
    alpha: 24,
    canary: 24
  },
  {
    name: 'Feb',
    delta: 30,
    alpha: 13,
    canary: 22
  },
  {
    name: 'Mar',
    delta: 20,
    alpha: 58,
    canary: 29
  },
  {
    name: 'Apr',
    delta: 14,
    alpha: 30,
    canary: 15
  },
  {
    name: 'May',
    delta: 29,
    alpha: 28,
    canary: 18
  },
  {
    name: 'Jun',
    delta: 19,
    alpha: 19,
    canary: 10
  },
  {
    name: 'Jul',
    delta: 34,
    alpha: 24,
    canary: 14
  },
  {
    name: 'Aug',
    delta: 21,
    alpha: 20,
    canary: 19
  },
  {
    name: 'Sep',
    delta: 49,
    alpha: 43,
    canary: 20
  },
  {
    name: 'Oct',
    delta: 43,
    alpha: 55,
    canary: 4
  },
  {
    name: 'Nov',
    delta: 39,
    alpha: 40,
    canary: 25
  },
  {
    name: 'Dec',
    delta: 34,
    alpha: 43,
    canary: 11
  }
]

export const employees = [
  {
    id: 1,
    firstName: 'Colin',
    lastName: 'Murray',
    teamName: 'alpha',
    isTeamLeader: true,
    avatar: cm
  },
  {
    id: 2,
    firstName: 'Tom',
    lastName: 'Phillips',
    teamName: 'beta',
    isTeamLeader: true
  },
  {
    id: 3,
    firstName: 'Liam',
    lastName: 'Fuentes',
    teamName: 'gamma',
    isTeamLeader: true
  },
  {
    id: 4,
    firstName: 'Tina',
    lastName: 'Fey',
    teamName: 'delta',
    isTeamLeader: true,
    avatar: tf
  },
  {
    id: 5,
    firstName: 'Katie',
    lastName: 'Johnson',
    teamName: 'epsilon',
    isTeamLeader: true
  },
  {
    id: 6,
    firstName: 'Tina',
    lastName: 'Jones',
    teamName: 'zeta',
    isTeamLeader: true
  },
  {
    id: 7,
    firstName: 'Amy',
    lastName: 'Adams',
    teamName: 'eta',
    isTeamLeader: true
  },
  {
    id: 8,
    firstName: 'Ryan',
    lastName: 'Lopez',
    teamName: 'theta',
    isTeamLeader: true,
    avatar: rl
  },
  {
    id: 9,
    firstName: 'Jenny',
    lastName: 'Jones',
    teamName: 'canary',
    isTeamLeader: true
  },
  {
    id: 10,
    firstName: 'Marcus',
    lastName: 'Rodriguez',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 11,
    firstName: 'Sarah',
    lastName: 'Mitchell',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 12,
    firstName: 'James',
    lastName: 'Wilson',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 13,
    firstName: 'Emma',
    lastName: 'Thompson',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 14,
    firstName: 'David',
    lastName: 'Chen',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 15,
    firstName: 'Olivia',
    lastName: 'Brown',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 16,
    firstName: 'Michael',
    lastName: 'Garcia',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 17,
    firstName: 'Sophia',
    lastName: 'Lee',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 18,
    firstName: 'Daniel',
    lastName: 'Anderson',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 19,
    firstName: 'Isabella',
    lastName: 'Martinez',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 20,
    firstName: 'Christopher',
    lastName: 'Taylor',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 21,
    firstName: 'Mia',
    lastName: 'Harris',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 22,
    firstName: 'Matthew',
    lastName: 'Clark',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 23,
    firstName: 'Charlotte',
    lastName: 'Lewis',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 24,
    firstName: 'Andrew',
    lastName: 'Walker',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 25,
    firstName: 'Amelia',
    lastName: 'Hall',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 26,
    firstName: 'Joshua',
    lastName: 'Allen',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 27,
    firstName: 'Harper',
    lastName: 'Young',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 28,
    firstName: 'Ethan',
    lastName: 'King',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 29,
    firstName: 'Evelyn',
    lastName: 'Wright',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 30,
    firstName: 'Alexander',
    lastName: 'Scott',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 31,
    firstName: 'Abigail',
    lastName: 'Green',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 32,
    firstName: 'Nathan',
    lastName: 'Baker',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 33,
    firstName: 'Emily',
    lastName: 'Nelson',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 34,
    firstName: 'Ryan',
    lastName: 'Carter',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 35,
    firstName: 'Madison',
    lastName: 'Mitchell',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 36,
    firstName: 'Jacob',
    lastName: 'Perez',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 37,
    firstName: 'Ella',
    lastName: 'Roberts',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 38,
    firstName: 'Tyler',
    lastName: 'Turner',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 39,
    firstName: 'Avery',
    lastName: 'Phillips',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 40,
    firstName: 'Samuel',
    lastName: 'Campbell',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 41,
    firstName: 'Grace',
    lastName: 'Parker',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 42,
    firstName: 'Benjamin',
    lastName: 'Evans',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 43,
    firstName: 'Lily',
    lastName: 'Edwards',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 44,
    firstName: 'Jonathan',
    lastName: 'Collins',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 45,
    firstName: 'Chloe',
    lastName: 'Stewart',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 46,
    firstName: 'Nicholas',
    lastName: 'Morris',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 47,
    firstName: 'Zoey',
    lastName: 'Rogers',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 48,
    firstName: 'Peyton',
    lastName: 'Black',
    teamName: 'gamma',
    isTeamLeader: false,
    avatar: false
  },
  {
    id: 49,
    firstName: 'Victoria',
    lastName: 'Reed',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 50,
    firstName: 'Brandon',
    lastName: 'Cook',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 51,
    firstName: 'Hannah',
    lastName: 'Morgan',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 52,
    firstName: 'Kevin',
    lastName: 'Bell',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 53,
    firstName: 'Lillian',
    lastName: 'Murphy',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 54,
    firstName: 'Aaron',
    lastName: 'Bailey',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 55,
    firstName: 'Aria',
    lastName: 'Rivera',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 56,
    firstName: 'Jack',
    lastName: 'Cooper',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 57,
    firstName: 'Scarlett',
    lastName: 'Richardson',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 58,
    firstName: 'Luke',
    lastName: 'Cox',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 59,
    firstName: 'Nora',
    lastName: 'Howard',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 60,
    firstName: 'Isaac',
    lastName: 'Ward',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 61,
    firstName: 'Layla',
    lastName: 'Torres',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 62,
    firstName: 'Mason',
    lastName: 'Peterson',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 63,
    firstName: 'Zoe',
    lastName: 'Gray',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 64,
    firstName: 'Carter',
    lastName: 'Ramirez',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 65,
    firstName: 'Penelope',
    lastName: 'James',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 66,
    firstName: 'Logan',
    lastName: 'Watson',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 67,
    firstName: 'Riley',
    lastName: 'Brooks',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 68,
    firstName: 'Wyatt',
    lastName: 'Kelly',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 69,
    firstName: 'Eleanor',
    lastName: 'Sanders',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 70,
    firstName: 'Owen',
    lastName: 'Price',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 71,
    firstName: 'Hazel',
    lastName: 'Bennett',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 72,
    firstName: 'Dylan',
    lastName: 'Wood',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 73,
    firstName: 'Violet',
    lastName: 'Barnes',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 74,
    firstName: 'Grayson',
    lastName: 'Ross',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 75,
    firstName: 'Aurora',
    lastName: 'Henderson',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 76,
    firstName: 'Levi',
    lastName: 'Coleman',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 77,
    firstName: 'Savannah',
    lastName: 'Jenkins',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 78,
    firstName: 'Hunter',
    lastName: 'Perry',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 79,
    firstName: 'Brooklyn',
    lastName: 'Powell',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 80,
    firstName: 'Sebastian',
    lastName: 'Long',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 81,
    firstName: 'Bella',
    lastName: 'Patterson',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 82,
    firstName: 'Henry',
    lastName: 'Hughes',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 83,
    firstName: 'Claire',
    lastName: 'Flores',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 84,
    firstName: 'Caleb',
    lastName: 'Washington',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 85,
    firstName: 'Lucy',
    lastName: 'Butler',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 86,
    firstName: 'Julian',
    lastName: 'Simmons',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 87,
    firstName: 'Stella',
    lastName: 'Foster',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 88,
    firstName: 'Christian',
    lastName: 'Gonzales',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 89,
    firstName: 'Paisley',
    lastName: 'Bryant',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 90,
    firstName: 'Jaxon',
    lastName: 'Alexander',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 91,
    firstName: 'Anna',
    lastName: 'Russell',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 92,
    firstName: 'Isaiah',
    lastName: 'Griffin',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 93,
    firstName: 'Caroline',
    lastName: 'Diaz',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 94,
    firstName: 'Cameron',
    lastName: 'Hayes',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 95,
    firstName: 'Genesis',
    lastName: 'Myers',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 96,
    firstName: 'Landon',
    lastName: 'Ford',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 97,
    firstName: 'Maya',
    lastName: 'Hamilton',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 98,
    firstName: 'Eli',
    lastName: 'Graham',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 99,
    firstName: 'Naomi',
    lastName: 'Sullivan',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 100,
    firstName: 'Colton',
    lastName: 'Wallace',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 101,
    firstName: 'Audrey',
    lastName: 'Woods',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 102,
    firstName: 'Jeremiah',
    lastName: 'Cole',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 103,
    firstName: 'Skylar',
    lastName: 'West',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 104,
    firstName: 'Easton',
    lastName: 'Jordan',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 105,
    firstName: 'Aaliyah',
    lastName: 'Owens',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 106,
    firstName: 'Elias',
    lastName: 'Reynolds',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 107,
    firstName: 'Madelyn',
    lastName: 'Fisher',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 108,
    firstName: 'Josiah',
    lastName: 'Ellis',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 109,
    firstName: 'Kinsley',
    lastName: 'Harrison',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 110,
    firstName: 'Hudson',
    lastName: 'Gibson',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 111,
    firstName: 'Piper',
    lastName: 'McDonald',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 112,
    firstName: 'Adrian',
    lastName: 'Cruz',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 113,
    firstName: 'Willow',
    lastName: 'Marshall',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 114,
    firstName: 'Axel',
    lastName: 'Ortiz',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 115,
    firstName: 'Kennedy',
    lastName: 'Gomez',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 116,
    firstName: 'Lincoln',
    lastName: 'Murray',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 117,
    firstName: 'Nova',
    lastName: 'Freeman',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 118,
    firstName: 'Connor',
    lastName: 'Wells',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 119,
    firstName: 'Emilia',
    lastName: 'Webb',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 120,
    firstName: 'Maverick',
    lastName: 'Simpson',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 121,
    firstName: 'Ivy',
    lastName: 'Stevens',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 122,
    firstName: 'Asher',
    lastName: 'Tucker',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 123,
    firstName: 'Alice',
    lastName: 'Porter',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 124,
    firstName: 'Thomas',
    lastName: 'Hunter',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 125,
    firstName: 'Quinn',
    lastName: 'Hicks',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 126,
    firstName: 'Silas',
    lastName: 'Crawford',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 127,
    firstName: 'Athena',
    lastName: 'Henry',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 128,
    firstName: 'Miles',
    lastName: 'Boyd',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 129,
    firstName: 'Gabriella',
    lastName: 'Mason',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 130,
    firstName: 'Ezra',
    lastName: 'Morales',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 131,
    firstName: 'Sadie',
    lastName: 'Kennedy',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 132,
    firstName: 'Brayden',
    lastName: 'Warren',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 133,
    firstName: 'Ariana',
    lastName: 'Dixon',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 134,
    firstName: 'Sawyer',
    lastName: 'Ramos',
    teamName: 'theta',
    isTeamLeader: false
  },
  {
    id: 135,
    firstName: 'Valentina',
    lastName: 'Reyes',
    teamName: 'canary',
    isTeamLeader: false
  },
  {
    id: 136,
    firstName: 'Jameson',
    lastName: 'Burns',
    teamName: 'alpha',
    isTeamLeader: false
  },
  {
    id: 137,
    firstName: 'Autumn',
    lastName: 'Gordon',
    teamName: 'beta',
    isTeamLeader: false
  },
  {
    id: 138,
    firstName: 'Parker',
    lastName: 'Shaw',
    teamName: 'gamma',
    isTeamLeader: false
  },
  {
    id: 139,
    firstName: 'Ellie',
    lastName: 'Holmes',
    teamName: 'delta',
    isTeamLeader: false
  },
  {
    id: 140,
    firstName: 'Declan',
    lastName: 'Rice',
    teamName: 'epsilon',
    isTeamLeader: false
  },
  {
    id: 141,
    firstName: 'Addison',
    lastName: 'Robertson',
    teamName: 'zeta',
    isTeamLeader: false
  },
  {
    id: 142,
    firstName: 'Everett',
    lastName: 'Hunt',
    teamName: 'eta',
    isTeamLeader: false
  },
  {
    id: 143,
    firstName: 'Chi',
    lastName: 'Lin',
    teamName: 'theta',
    isTeamLeader: false,
    avatar: avatar1
  }
]
