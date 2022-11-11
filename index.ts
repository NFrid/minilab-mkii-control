loadAPI(17);

host.setShouldFailOnDeprecatedUse(true);

host.defineController(
  'Arturia',
  'MiniLab MK II',
  '1.0.0',
  '5496751f-e0b7-4d83-a9a9-82ab677fd831',
  'Nick Friday',
);

const init = () => {
  println('MiniLab MK II controller script by Nick Friday was initialized!');
};

const flush = () => {};

const exit = () => {};
