const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {

        console.log('Received:', data.toString()); // 클라이언트 요청 메시지 출력
        // HTTP 응답 메시지 구성
        const httpResponse = `HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\n\r\n<h1>Welcome to the HTTP Server!</h1>`;

        // 응답 전송
        socket.write(httpResponse);
        // 소켓 종료
        socket.end();
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 7777');
});

/**
 * const net = require('net');
 *
 * const server = net.createServer((socket) => {
 *     socket.on('data', (data) => {
 *         const request = data.toString();
 *         console.log('Received:', request);
 *
 *         // 요청에서 첫 번째 줄만 추출 (HTTP 메서드와 경로 포함)
 *         const requestLine = request.split('\r\n')[0];
 *         const [method, path] = requestLine.split(' ');
 *
 *         // 라우팅 로직
 *         let httpResponse;
 *         if (path === '/') {
 *             httpResponse = 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\n\r\n<h1>Welcome to the Home Page!</h1>';
 *         } else if (path === '/about') {
 *             httpResponse = 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\n\r\n<h1>About Us</h1>';
 *         } else {
 *             httpResponse = 'HTTP/1.1 404 Not Found\r\nContent-Type: text/html; charset=UTF-8\r\n\r\n<h1>404 Page Not Found</h1>';
 *         }
 *
 *         // 응답 전송
 *         socket.write(httpResponse);
 *
 *         // 소켓 종료
 *         socket.end();
 *     });
 * });
 *
 * server.listen(8080, () => {
 *     console.log('Server is running on port 8080');
 * });
 */