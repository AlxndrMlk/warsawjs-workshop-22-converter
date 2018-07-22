import NBPService from './nbpservice';
import axios from 'axios';
import Mocks from './mocks';

jest.mock('axios');

test('NBPserv. fetch curr. rate ', async () => {
  const response = Mocks.axiosGet;
  axios.get.mockResolvedValue(response);
  const service = new NBPService();
  expect(await service.getCurrentRate('pln')).toBe(3.7170);
})
