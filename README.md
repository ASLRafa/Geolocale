# Descrição do Programa

Este é um aplicativo desenvolvido em React Native que utiliza a biblioteca react-native-get-location para obter a localização atual do usuário. A cada 5 segundos, a função getCurrentLocation() é chamada para obter as coordenadas de latitude e longitude do dispositivo.

O aplicativo solicita permissão para acessar a localização do usuário usando a API PermissionsAndroid do React Native. Se a permissão for concedida, a localização atual é exibida na tela em tempo real, com as informações de latitude e longitude atualizadas a cada 5 segundos. Caso contrário, um aviso é exibido informando que a permissão não foi concedida.

O objetivo deste aplicativo é fornecer um exemplo simples e funcional de como obter a localização do usuário em um aplicativo React Native. O código também pode ser usado como base para projetos mais complexos que requerem o uso de geolocalização.
