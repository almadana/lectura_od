function get_conditions() {
  const trials = conditions[environment];

  let font_families = [];
  let excercices = [];

  if (gid==1) {
    font_families = ['font_serif', 'font_dyslexic'];
    excercices = [trials[0], trials[1]]
  } else if (gid==2) {
    font_families = ['font_dyslexic', 'font_serif'];
    excercices = [trials[0], trials[1]]
  } else if (gid==3) {
    font_families = ['font_serif', 'font_dyslexic'];
    excercices = [trials[1], trials[0]]
  } else if (gid==4) {
    font_families = ['font_dyslexic', 'font_serif'];
    excercices = [trials[1], trials[0]]
  }

  return [font_families, excercices]
}
