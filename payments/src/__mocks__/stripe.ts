export const stripe = {
  charges: {
    create: jest.fn().mock().mockResolvedValue({}),
  },
};
