export const validate =
  (schema) =>
  ({ body }, res, next) => {
    try {
      schema.parse(body);
      next();
    } catch (error) {
      const message = error.errors.map((e) => e.message).join(', ');
      res.status(400).json({ status: 'fail', message });
    }
  };