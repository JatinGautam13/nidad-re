import styles from './Hero4.module.css';

export default function Hero4() {
  const personas = [
    {
      id: 1,
      title: 'New residents and expatriates starting their careers or businesses in the UAE',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop',
      size: ''
    },
    {
      id: 2,
      title: 'Young professionals looking to advance in a multicultural landscape',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
      size: 'large'
    },
    {
      id: 3,
      title: 'Managers and staff navigating local etiquette',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
      size: 'medium'
    },
    {
      id: 4,
      title: 'Women and youth seeking to build future-ready soft skills',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop',
      size: 'large'
    },
    {
      id: 5,
      title: 'International teams building cross-cultural communication skills',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      size: 'full'
    },
    {
      id: 6,
      title: 'Entrepreneurs adapting to UAE business culture',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
      size: 'medium'
    },
    {
      id: 7,
      title: 'Remote workers establishing professional presence',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop',
      size: 'large'
    },
    {
      id: 8,
      title: 'Career changers exploring new opportunities',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=600&fit=crop',
      size: ''
    },
    {
      id: 9,
      title: 'Students preparing for UAE job market',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop',
      size: 'medium'
    },
    {
      id: 10,
      title: 'Leaders building inclusive workplace culture',
      image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&h=600&fit=crop',
      size: 'large'
    },
    {
      id: 11,
      title: 'Freelancers networking in Dubai',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      size: ''
    },
    {
      id: 12,
      title: 'Corporate trainers upskilling teams',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      size: 'medium'
    },
    {
      id: 13,
      title: 'HR professionals implementing diversity programs',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      size: 'medium'
    },
  ];

  return (
    <section className={styles.section}>
      <h1 className={styles.mainTitle}>
        <span className={styles.personaText}>Persona</span> Analysis
      </h1>
      
      <div className={styles.grid}>
        {personas.map((persona) => (
          <div
            key={persona.id}
            className={`${styles.item} ${persona.size ? styles[`item--${persona.size}`] : ''}`}
            style={{ backgroundImage: `url(${persona.image})` }}
          >
            <div className={styles.itemDetails}>
              {persona.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}