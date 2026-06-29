// ===== Central course metadata for CSS5280 =====
const COURSE = {
    code: 'CSS5280',
    title: 'Modeling and Analysis of Complex Systems',
    subtitle: '复杂系统的建模和分析',
    semester: 'Fall 2025',
    instructor: {
        name: 'Prof. Zhanzhan Zhao',
        email: 'zhanzhanzhao@cuhk.edu.cn',
        office: 'Wednesdays 11:20 am – 12:20 pm (TXB 908)'
    },
    ta: {
        name: 'Haochuan Liu',
        email: 'haochuanliu@link.cuhk.edu.cn',
        office: 'Wednesdays 11:20 am – 12:20 pm (TXB 908)'
    },
    classTime: '8:30 am – 11:20 am, Wednesdays',
    classroom: 'Teaching A Building (TA) 317',
    firstClass: 'Sep 3, 2025',
    institution: 'The Chinese University of Hong Kong, Shenzhen',
    address: '2001 Longxiang Road, Longgang District, Shenzhen',
    navPages: [
        { key: 'home',      label: 'Home',       href: 'index.html' },
        { key: 'outline',   label: 'Outline',    href: 'outline.html' },
        { key: 'schedule',  label: 'Schedule',   href: 'schedule.html' },
        { key: 'lecture',   label: 'Lecture',    href: 'lecture.html' },
        { key: 'lab',       label: 'Lab',        href: 'lab.html' },
        { key: 'project',   label: 'Project',    href: 'project.html' },
        { key: 'materials', label: 'Materials',  href: 'materials.html' }
    ]
};

// Make available globally
window.COURSE = COURSE;
