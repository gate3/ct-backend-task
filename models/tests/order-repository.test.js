const DatabaseHelper = require('../database/database-helper');
jest.mock('../database/database-helper');

const OrderRepository = require('../orders-repository');
const mockSampleOrder = {
  address: {
    city: 'Lagos',
    country: 'Nigeria',
    street: '1, Twins Obasa Street',
    zip: '23401',
  },
  bookingDate: new Date().getTime(),
  customer: {
    email: 'doyin@gmail.com',
    name: 'Oluwadoyin Olarewaju',
    phone: '+2348130309625',
  },
  title: 'Block of Flats',
};
describe('Order Repository Class', () => {
  afterAll(() => jest.clearAllMocks());
  // Arrange
  const databaseHelper = new DatabaseHelper({database: jest.fn()});
  const orderId = '-MOzZMdI0rVbERZSeu4Q';
  const saveEntityMock = jest.fn(async ({model, newEntity}) => ({
    ...newEntity,
    id: orderId,
  }));
  const mockModel = {
    child: jest.fn(),
  };
  const getModelMock = jest.fn(() => mockModel);
  const updateFullEntityMock = jest.fn();
  databaseHelper.getModel
      .mockImplementation(getModelMock);
  databaseHelper.saveEntity
      .mockImplementation(saveEntityMock);
  databaseHelper.updateFullEntity
      .mockImplementation(updateFullEntityMock);

  const orderRepository = new OrderRepository({databaseHelper});

  describe('Create order function', () => {
    // eslint-disable-next-line max-len
    it('should call the database helper saveEntity function and return the savedOrder with a pushId.', async () => {
      // Arrange
      const expectedOrder = {
        ...mockSampleOrder,
        id: orderId,
      };
      // Act
      const actualOrder = await orderRepository.createOrder({
        newOrder: mockSampleOrder,
      });

      // Assert
      expect(actualOrder).toMatchObject(expectedOrder);
    });
    // eslint-disable-next-line max-len
    it('should call the saveEntity function of databaseHelper with the right arguments.', async () => {
      // Arrange

      // Act
      await orderRepository.createOrder({
        newOrder: mockSampleOrder,
      });

      // Assert
      expect(saveEntityMock).toHaveBeenCalledWith({
        model: mockModel,
        newEntity: mockSampleOrder,
      });
    });
  });

  describe('Update order function', () => {
    // eslint-disable-next-line max-len
    it('should call the database helper updateFullEntity function and not expect a return value', async () => {
      // Arrange
      const expectedResult = undefined;
      // Act
      const actualResult = await orderRepository.updateOrder({
        orderId,
        newOrder: mockSampleOrder,
      });

      // Assert
      expect(actualResult).toBe(expectedResult);
    });
    // eslint-disable-next-line max-len
    it('should call the updateFullEntity function of databaseHelper with the right arguments.', async () => {
      // Arrange

      // Act
      await orderRepository.updateOrder({
        orderId,
        updatedOrder: mockSampleOrder,
      });

      // Assert
      expect(updateFullEntityMock).toHaveBeenCalledWith({
        model: mockModel.child(),
        updatedEntity: mockSampleOrder,
      });
    });
  });
});
