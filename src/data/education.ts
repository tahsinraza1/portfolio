export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export const education: Education[] = [
  {
    id: 'btech',
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Babu Banarasi Das University',
    location: 'Lucknow',
    year: '2021 – 2025',
  },
  {
    id: 'intermediate',
    degree: 'Intermediate',
    institution: 'K.N. Intermediate School',
    location: 'Deoria',
    year: '2019 – 2020',
  },
  {
    id: 'highschool',
    degree: 'High School',
    institution: 'Ayesha Tarin Modern Public School',
    location: 'Aligarh',
    year: '2018 – 2019',
  },
];

export const certifications: Certification[] = [
  {
    id: 'ikigai-mern',
    title: 'Successfully Completed MERN Stack Program',
    issuer: 'IKIGAI School of AI',
    year: 'April – June 2024',
  },
];
