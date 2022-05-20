# React_Native_Nomad_Animation

### 꿀팁

- useRef를 이용하여 rendering할 시에도 변수의 값을 계속 유지 시킬 수 있다.
- elevation을 통해 그림자 생성 가능
- 타입형태뒤에 ? 가 붙은것은 그 자료형의 data값을 필수로 기재할 필요는 없다는 뜻.
- Component에 selected 라는 props를 두어 버튼 누르는거 마냥 상태 관릭가 가능
- npm install @types/styled-components @types/styled-components-react-native 로 porp들의 자동완성 기능을 추가할 수 있다.

## Realm

- Scehema 안에 필수 property, \_id밑에 저장을 원하는 data와 데이터 타입 형태를 적으면된다.

```Javascript
Schema = {
name: "name",
properties:{
    _id: "int",
    dataname: "type"
},
primaryKey:"_id"
}
```
