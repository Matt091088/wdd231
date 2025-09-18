const byuiCourse = {
  title: "BYU-I Course Enrollment Example",
  sections: [
    { section: 1, capacity: 30, enrolled: 26 },
    { section: 2, capacity: 25, enrolled: 20 },
    { section: 3, capacity: 20, enrolled: 18 }
  ],

  changeEnrollment(sectionNum, enroll = true) {
    const num = parseInt(sectionNum, 10);
    const sec = this.sections.find(s => s.section === num);
    if (!sec) return;

    if (enroll) {
      if (sec.enrolled < sec.capacity) sec.enrolled++;
    } else {
      if (sec.enrolled > 0) sec.enrolled--;
    }
  }
};

export default byuiCourse;

