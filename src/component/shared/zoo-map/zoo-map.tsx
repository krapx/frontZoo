import "./zoo-map.css"
import {SpaceResponse} from "../../../api/space/space.dto";
import {useState} from "react";

interface IZooMapProps {
    fetchAnimals: (e: any, index: number) => void
    spaces: SpaceResponse[]
}

export const ZooMap = (props: IZooMapProps) => {
    const {fetchAnimals, spaces} = props;
    const [currentSpace, setCurrentSpace] = useState(null as SpaceResponse);

    function handleFetchAnimals(e: any, index: number) {
        if (isAccessible(index)) {
            setCurrentSpace(spaces[index])
            fetchAnimals(e, index)
        }
    }

    const getStatusOfSpace = (index: number): string => {
        return isAccessible(index) ? "" : " disabled"
    };

    const isAccessible = (index: number) => {
        let validStatus = ['IN_PROGRESS', 'COMPLETED'];
        const isPresent = index < spaces.length;
        const isAccessible = validStatus.includes(spaces[index].status)
        return isPresent && isAccessible
    }

    return (
        <div className="ZooMap">
            {currentSpace
                ? <div className="ZooMap__details">
                    <div >{currentSpace.name} </div>
                    <div className="ZooMap__deadCount">{currentSpace.defeatedCount} defeated</div>
                   </div>
                : <></>
            }
            <div className="ZooMap__spaces">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 362">
                    <g className={`map-group`} onClick={e => handleFetchAnimals(e, 0)}>
                        <title>River's Edge</title>
                        <path
                            className="rivers-edge map-zone"
                            d="M96.23,337.32a175.44,175.44,0,0,0,87.29,3.52l106-26.5c.78-12.21,1.42-29.15,2-45.53s1.25-33.24,2-45.46l-52.56-11.47L134.18,150.71,117.44,94.09,26.13,87,7.83,275.57C20.91,292.69,49.6,323.16,96.23,337.32Z"
                            transform="translate(-7.83 -6)"
                        />
                        <path
                            className="map-icon"
                            d="M161,225.72a29.83,29.83,0,1,0,29.82,29.83A29.84,29.84,0,0,0,161,225.72Zm22.26,34.42c-.6.59-1.15,1.23-.74,2.11s-.91,2.33-1.33,3a11.69,11.69,0,0,1-2,2.43,20.71,20.71,0,0,1-3,0c-.92,0-1.29-.41-1.33-.59s1.33-.55,1.56-1a11.58,11.58,0,0,0,1.19-1.83c.06-.21,0-.33-.07-.4h0a2.38,2.38,0,0,0-.3-.76,8.33,8.33,0,0,0-.12-1.74,1.21,1.21,0,0,1,.12-.92,27.9,27.9,0,0,1-5.14,3.42c-4.84,1.09-10.07-1.08-10.95-1.48a1.39,1.39,0,0,0-1.51.14c0,1.83-.92,2-1,2.47s0,1.33-.21,1.47-.06.87,0,1.24,0,0-.55.59-1.65.1-1.65.1l-.18.13a1.41,1.41,0,0,1-.78.28c-.27,0-1.42-.32-1.74-.32s-.09-.6,0-1,2.11-1.93,2.11-2.57-.78-4.4-.78-4.72-1-.6-1.65-1a7.74,7.74,0,0,1-1.6-1.15c-.18-.27-1.38-.5-1.56-.78a3.54,3.54,0,0,0-1-.65c-1.61.08-1.88-.81-3.26-1.13-.82-.2-.79-.82-1.46-1.13a12.12,12.12,0,0,0-2.62-.2c-3.39-.23-3.76-.46-3.94-.85s.6-.53-.09-.44-.44-.07-.6-.69c-.5-1.95,1.15-4.63,1.15-4.63s4-1.6,3.71-2,.28-1.33.92-1.75,1.14.42,1.14.42a6.93,6.93,0,0,1,1.82-.85,11.36,11.36,0,0,1,3-.35,1.43,1.43,0,0,1,.86-.73,1.29,1.29,0,0,1,.94.08,1.4,1.4,0,0,1,.57,1.51,30.31,30.31,0,0,1,3.26,1.24c.74.33,1.43.68,2.07,1l.65,0c.64-.05,2.79.36,3.79.41,4.14.18,4.14-1.66,14.13,0,2,.35,2.93,1.41,4.27,1.84,4.58,1.47,5,3.83,5.36,4.54.46,1-.32,3.76-.5,4.31S183.81,259.54,183.22,260.14Z"
                            transform="translate(-7.83 -6)"
                        />
                    </g>
                    <g className={`map-group ${getStatusOfSpace(1)}`}
                       onClick={e => handleFetchAnimals(e, 1)}>
                        <title>Discovery Corner</title>
                        <polygon
                            className="discovery-corner map-zone"
                            points="299.49 128.75 328.51 88.76 281.62 61.73 244.63 65.66 228.11 82.18 214.81 67.22 190.4 61.88 176.13 116.61 132.29 145.83 233.93 204.01 286.27 215.44 308 171.33 299.49 128.75"
                        />
                        <path
                            className="map-icon"
                            d="M253.18,109A29.83,29.83,0,1,0,283,138.84,29.83,29.83,0,0,0,253.18,109Zm15.11,44a7.69,7.69,0,0,1-6.6,4.33,4.41,4.41,0,0,1-2.89-1c-1.65-1.41-3.59-4.92-4.47-7.16a6,6,0,0,1-1.15,3,6,6,0,0,1-1.16-3c-.88,2.24-2.81,5.75-4.47,7.16a4.41,4.41,0,0,1-2.89,1,7.69,7.69,0,0,1-6.6-4.33c-2.74-5.2,1.89-9.26,9.06-10.36-3.69-.26-7.91-1-9.35-2.08-2-1.59-3.91-10.55-3.74-15.15a2.4,2.4,0,0,1,2.4-2.59,3.78,3.78,0,0,1,.71.07c3.24.62,9.33,5,14.51,11.63-.34-1.48-.6-2.35,0-2.75l-2.85-5.2a.55.55,0,0,1,1-.53l2.94,5.36a.29.29,0,0,1,0,.1h.85a.29.29,0,0,1,0-.1l2.94-5.36a.55.55,0,0,1,.75-.22.56.56,0,0,1,.22.76l-2.85,5.19c.61.4.35,1.27,0,2.75,5.18-6.58,11.27-11,14.51-11.63a3.8,3.8,0,0,1,.72-.07,2.4,2.4,0,0,1,2.39,2.59c.17,4.6-1.71,13.56-3.74,15.15-1.44,1.12-5.66,1.82-9.35,2.08C266.4,143.75,271,147.81,268.29,153Z"
                            transform="translate(-7.83 -6)"
                        />
                    </g>
                    <g className={`map-group ${getStatusOfSpace(2)}`}
                       onClick={e => handleFetchAnimals(e, 2)}>
                        <title>Lakeside Crossing</title>
                        <polygon
                            className="lakeside-crossing map-zone"
                            points="431.36 198.08 411.76 139.51 360.38 130.62 329.97 90.11 301.59 129.21 310.07 171.6 287.79 216.81 283.67 308.14 331.88 308.91 325.56 280.85 325.8 280.49 357.88 233.41 401.33 243.13 431.36 198.08"
                        />
                        <path
                            className="map-icon"
                            d="M368.42,154.87a29.83,29.83,0,1,0,29.82,29.83A29.84,29.84,0,0,0,368.42,154.87Zm19.65,47.79a4.29,4.29,0,0,1-3.75,2.48,3.37,3.37,0,0,1-1.72,0c-.46-.19-.42-.59.11-.69a9.84,9.84,0,0,0,1.52-.41,1.25,1.25,0,0,0,.61-.51,8,8,0,0,1-3.59.44c-1.48-.34-.8-.94.49-1a5,5,0,0,0,2.82-1,9.57,9.57,0,0,1-2.3.57c-1.21.13-2.47,0-1.65-.77a20.65,20.65,0,0,1,2.22-.56,9,9,0,0,0,1.68-.72,14.49,14.49,0,0,1-2.35.36c-.81,0-.88-.49-.58-.64a22.44,22.44,0,0,1,2.24-.65c.72-.26.68-1.12,1-1.81-.27-.31-.56-.67-.86-1-1.19-1.5-5.23-2.25-8.69-2.2-1.31,0-3,.26-4.75.42a2.32,2.32,0,0,0,.21.45c.68,1.11,2.07,1.25,4.16,1.81,1.72.47,2.95.8,2.94,1.13s-2.64.79-4.49.84a12.15,12.15,0,0,1-5.9-1,5.72,5.72,0,0,1-2.43-2,4.93,4.93,0,0,1-.67-1.56,6.71,6.71,0,0,1-2.07-1,11.61,11.61,0,0,1-2-1.8c-.1.95-.45,3.05-2,3.92-.39.21-.55.19-2.81.29a45.51,45.51,0,0,1-6.11-.3c-1-.11-1.2-.58-.23-.63s4.73-.41,5.8-.52a2.11,2.11,0,0,0,1.76-1.81c.08-.72-.23-6.43-.23-9.07,0-.13,0-.24,0-.35-.06-.33-.12-.66-.16-1-.57-4.27-.24-5.71-.67-7.18a9.48,9.48,0,0,0-.61-1.56,5.93,5.93,0,0,0-2.37-2.66,10.46,10.46,0,0,0,.83,3,.15.15,0,0,1-.08.2h-.06a.15.15,0,0,1-.14-.09,10.57,10.57,0,0,1-.87-3.33l-.24-.16a7.68,7.68,0,0,0,.38,2.3.14.14,0,0,1-.09.19h-.05a.15.15,0,0,1-.14-.1,8.29,8.29,0,0,1-.41-2.65l-.14-.15a5.23,5.23,0,0,0,.09,1.63.14.14,0,0,1-.1.18h0a.16.16,0,0,1-.15-.11,6,6,0,0,1-.08-2l-.27-.37a4.5,4.5,0,0,0,.05,1.27.15.15,0,0,1-.12.17h0a.14.14,0,0,1-.15-.12,4.9,4.9,0,0,1,0-1.75l-.06-.12a2.08,2.08,0,0,1-.17-1.69.79.79,0,0,1,.27-.38.89.89,0,0,1,.63-.22,9.78,9.78,0,0,1,2,.37c1.1.07,2.08-.31,3.51-.14s4.05.57,5.16,2.56c.91,1.64,2.15,4.41,3.12,5.77a52.31,52.31,0,0,0,4.51,5.57,20,20,0,0,0,7.08,3.62c2.74.46,8.13,2.21,9.36,6.51.94,3.33,1.35,5.55,1.07,6.75A6.84,6.84,0,0,1,388.07,202.66Z"
                            transform="translate(-7.83 -6)"
                        />
                    </g>
                    <g className={`map-group ${getStatusOfSpace(3)}`}
                       onClick={e => handleFetchAnimals(e, 3)}>
                        <title>The Wild</title>
                        <polygon
                            className="the-wild map-zone"
                            points="499.45 101.38 459.06 0 443.08 0 284.13 60.89 330.62 87.7 330.74 87.86 361.49 128.81 413.26 137.77 433 196.75 470.72 174.21 464.63 141.18 499.45 101.38"
                        />
                        <path
                            className="map-icon"
                            d="M422.28,49.36A29.83,29.83,0,1,0,452.1,79.19,29.84,29.84,0,0,0,422.28,49.36Zm20.27,26a15.42,15.42,0,0,1-3.69,1s-6.19,0-7.94,1.52c-.09.15-.17.31-.26.47h0c0,.22,2,12.11,2.8,12.36a1.1,1.1,0,0,1,.31,0h.06l.16,0,.1,0,.16,0,.08,0,.16.09.09.06.15.11.09.07.11.1.12.12.08.09.13.16.06.08.13.18.05.08.13.21,0,.06.08.13,0,0,.11.22,0,.06.09.2,0,.06.06.16,0,.08a.24.24,0,0,1,0,.08.56.56,0,0,1,0,.12l0,0a.52.52,0,0,1,0,.11v0s0,.07,0,.09h0v0c-6.47,0-7,0-7,0a2.11,2.11,0,0,1-.69-1h0a1.68,1.68,0,0,1-.09-.32v0a2.25,2.25,0,0,1,0-.38h0a1.93,1.93,0,0,1,0-.24v0l0-.23v0c0-.09.05-.19.08-.29h0c-.62-1.11-1.95-4.34-2.64-6.05-.61,1.42-2.07,5.18-.62,5.68a3,3,0,0,1,2.15,3h-7s-.87-.8-.93-1.41a1.75,1.75,0,0,1,.31-1.11,39.79,39.79,0,0,1,.06-7.51,13.33,13.33,0,0,1-4.56.91c0,.11,0,.21-.05.31v.06c0,.17-.05.35-.07.52v.09c-.05.36-.09.72-.14,1.07v0c0,.36-.08.7-.11,1v0c0,.33-.06.64-.08.92v0c0,.28,0,.54,0,.78v0a5.78,5.78,0,0,0,0,.59v.06c0,.07,0,.14,0,.2a.09.09,0,0,0,0,0,.51.51,0,0,0,0,.13v0a.28.28,0,0,0,0,.11s0,0,0,0l0,0h0a1.22,1.22,0,0,1,.32,0h.05l.17,0,.1,0,.15,0,.09,0,.16.09.09.06.15.11.09.07.11.1.11.12.08.09a1,1,0,0,1,.13.16l.07.08.13.18a.35.35,0,0,0,.05.08c0,.07.09.14.13.22l0,0,.08.13,0,0,.11.22,0,.06.09.2,0,.06a.64.64,0,0,1,.06.16l0,.08,0,.08a.56.56,0,0,1,0,.12v0a.61.61,0,0,1,0,.11v0a.34.34,0,0,1,0,.09h0v0c-6.46,0-7,0-7,0a1.73,1.73,0,0,1-.41-.43h0a1,1,0,0,1-.15-.24h0l-.12-.28v0a2.33,2.33,0,0,1-.08-.31s0,0,0-.06a2.1,2.1,0,0,1,0-.36h0v0a1.41,1.41,0,0,1,0-.2.13.13,0,0,1,0-.06,2.08,2.08,0,0,1,0-.23v0c0-.09.05-.19.08-.29h0a22.05,22.05,0,0,1-1.31-4.08c-1,1.3-2.12,3.08-1.61,3.46,2.77,1.42,2.34,3.2,2.34,3.2h-6.77s-.92-.49-1-1.23.43-1.6,0-2.46-1.48-9.85-1.48-10.21.31-4.74,2.71-7.45,6.77-4.49,8.92-4.43,9,.68,9,.68.8.49,3.88-1c1.29-1,3.75,0,3.75,0a5.16,5.16,0,0,0,3.51-1,3,3,0,0,1,2.89-.67,2.22,2.22,0,0,1,1.91-1c.53.39.49,2.13.49,2.13s3.14,1,3.33,3.14c1.47.92,3.23,1.84,3.23,1.84s1,.56,0,1.94S443.24,74.81,442.55,75.32ZM415.11,90.61Z"
                            transform="translate(-7.83 -6)"
                        />
                    </g>
                    <g className={`map-group ${getStatusOfSpace(4)}`}
                       onClick={e => handleFetchAnimals(e, 4)}>
                        <title>Historic Hill</title>
                        <polygon
                            className="historic-hill map-zone"
                            points="476.82 305.05 525.44 279.49 560.43 221.01 560.45 173.74 566.1 143.4 524.88 126.46 524.74 126.33 500.65 103.01 466.74 141.76 472.91 175.2 433.15 198.96 402.22 245.35 401.56 245.2 358.75 235.63 327.67 281.25 333.97 309.18 393.74 332.13 454.84 349.1 476.53 305.2 476.82 305.05"
                        />
                        <path
                            className="map-icon"
                            d="M492.68,212.42a29.83,29.83,0,1,0,29.82,29.83A29.82,29.82,0,0,0,492.68,212.42Zm22.46,29.25a1.26,1.26,0,0,1-.26-.09l-.16-.09a1.27,1.27,0,0,1-.21-.15,3.84,3.84,0,0,1-.29-.27,4.86,4.86,0,0,1-.42-.53,7.59,7.59,0,0,1-.63-1.1,8.23,8.23,0,0,1-.66-2.36c0-.21,0-.41,0-.61s0-.2,0-.31v-.31c0-.39,0-.76.07-1.13,0-.73.1-1.44.11-2.14a11.51,11.51,0,0,0-.15-2.05,6.15,6.15,0,0,0-.6-1.86,4.45,4.45,0,0,0-1.21-1.45,5.55,5.55,0,0,0-1.73-.93l-.48-.16-.12,0-.13,0-.13,0-.12,0a5.64,5.64,0,0,0-1-.15,2.87,2.87,0,0,0-1.75.35,2.12,2.12,0,0,0-.62.61c-.1.15.07-.41-.27.48s0,4,.11,5.74.23,5-.23,5.77a1.84,1.84,0,0,1-.61.63,1.82,1.82,0,0,1,.35.68c.21,1.15-1.08,6.85-1.21,7.44s.46,4.75.39,5.7a3.9,3.9,0,0,1-1.06,1.92.11.11,0,0,1,0,0,5.11,5.11,0,0,1-1.79,1,18.57,18.57,0,0,1-2.17.37c-.3-.08-.22-.27-.4-.22s-1-.05-.81-.2,1.8-1,1.68-1-.2-.37,0-.37.95-.36,1.46-.55a.29.29,0,0,1,.08,0c.72-.3.43-.62.06-2a11,11,0,0,0-1.57-3.5c-1-1.71-.33-4.92-.33-4.92s.26-.3-.69.75a2.47,2.47,0,0,1-.92.54,8,8,0,0,1-.62.74c-.4.36-.23,2.46,0,2.82s2.46,4.06.79,5.21l-.2.12h0a1.14,1.14,0,0,0-.31.44c-.19.36-.39,1.32-.89,1.44s-.32-.12-.32-.12-.49-.17-.68-.16a4.67,4.67,0,0,0-.8.26,11.75,11.75,0,0,0-1.4.14c-.71.13-.47-.19-.47-.19s-.46-.32-.74-.21-.19-.55,0-.6,1.16-.32,1.28-.55,1.75-.46,1.75-.46l.46-.58h0a12.31,12.31,0,0,1-1.43-3c-.32-.75-1.77-2.68-1.77-3.18v-1l-.23,0-.33,0c0,1.31-2.26,7.34-2.26,7.34-.86,3.71-4.73,6.23-4.73,6.23s-2.66.2-3,.15l-.85-.15a5.79,5.79,0,0,1-1,.15l-.13,0h0a3.72,3.72,0,0,1-.64-.27,6.46,6.46,0,0,1,2.29-1.05,4.08,4.08,0,0,0,1.3-.42,5,5,0,0,0,.85-.38c-.65.31-1.25.55-1.25.55l-1-.12a3.23,3.23,0,0,1-1.08.36c-.32,0,.21-.46.21-.46a2.91,2.91,0,0,1-1.17.24c-.21,0-.25-.1-.27-.16h0a.15.15,0,0,0-.15-.11c-.25,0-.32,0-.2-.14s3.63-1.5,3.63-1.5a11,11,0,0,0,1.25-2c.13-.53,1.31-5.08,1.54-5.84s-.81-3.06-.81-3.06h0a4.11,4.11,0,0,1-2.44-2.63,7,7,0,0,0-1.61-3.38l0,.23a1,1,0,0,1-1-1c0-.4-.69-.76-.69-.76s-1-.88-1.18-.95-.08-1.16-.08-1.16a4.54,4.54,0,0,1-.36-.42l-.56.32.12-.4-.3.08.14-.56h-.22l.43-.62s0-.08,0-.13l-.87,0,.92-.65-.11-.19.17-.24-.17-.2H476l.39,0a6.17,6.17,0,0,1,3.67-1.89,3.48,3.48,0,0,1,2.76.61l1.27.17-.3.32,2,.4-.88.41.69.12-.71.8v0c.1.27.82.59.82.59,7-1.86,16.12,3.31,16.12,3.31s.83.43,1.12-1.34a46.67,46.67,0,0,0-.1-6.67,8.79,8.79,0,0,1,.31-2.31,4.87,4.87,0,0,1,.51-1.15,3.32,3.32,0,0,1,.92-.95,3.7,3.7,0,0,1,.59-.32,3.41,3.41,0,0,1,.62-.19,4.85,4.85,0,0,1,1.25-.11,6.78,6.78,0,0,1,1.19.14l.15,0,.13,0,.14,0,.14,0,.58.16a7.18,7.18,0,0,1,2.16,1.08,6.06,6.06,0,0,1,1.64,1.85,7.77,7.77,0,0,1,.83,2.27,13.24,13.24,0,0,1,.24,2.32c0,.77,0,1.52,0,2.25,0,.36,0,.72,0,1.06a1.77,1.77,0,0,1,0,.24c0,.08,0,.16,0,.24a3.93,3.93,0,0,0,.06.48,6.47,6.47,0,0,0,.58,1.84,5.19,5.19,0,0,0,.48.79,3,3,0,0,0,.27.32l.1.08a.95.95,0,0,1-.53,1.81Z"
                            transform="translate(-7.83 -6)"
                        />
                    </g>
                    <g className={`map-group ${getStatusOfSpace(5)}`}
                       onClick={e => handleFetchAnimals(e, 5)}>
                        <title>Red Rocks</title>
                        <path
                            className="red-rocks map-zone"
                            d="M570.23,227.56l-.14.23L534.68,287l-.24.13-48.59,25.54-21.25,43a299.81,299.81,0,0,0,203.17-10,29.14,29.14,0,0,1,10.47-18.59c8.84-7.08,19-6.4,22.56-5.88l27.61-108.32L575.79,150.17,570.23,180Z"
                            transform="translate(-7.83 -6)"
                        />
                        <path
                            className="map-icon"
                            d="M626.33,247.65a29.83,29.83,0,1,0,29.82,29.82A29.83,29.83,0,0,0,626.33,247.65ZM648.24,283a4,4,0,0,1-3.22-.59,5.87,5.87,0,0,1-2.86-4.64,23.36,23.36,0,0,0-.52-2.85,13.42,13.42,0,0,0-.23,3.58c.07,1.27,0,4.09.62,4.94s.77,1,.89,1.47a5.75,5.75,0,0,1-.73,3.08,13.34,13.34,0,0,0-1,1.42l-2.19.09s-.41-1.32,1.18-1.15a2.09,2.09,0,0,0,.07-2.55,12,12,0,0,0-1.88-2.66s.14,1.25.51,1.59.18,1,.18,1a18.42,18.42,0,0,1-1.9,2.73c-.32.11-.84.92-.84.92h-2.72S633.1,288,635,288c0,0,1.62-1.5,1.25-2.37s-1.17-2.52-1.67-4c0,0-1-3.33-1.37-3.33s-5.48,1.52-7.57,1.68a31.46,31.46,0,0,1-5.12-.23,11.86,11.86,0,0,0-.75,4.46,12.56,12.56,0,0,1-.25,4.41c-.18.11-2.47.48-3,.11s-.34-.41-.34-.41a.8.8,0,0,1-.19-.94c.12-.32.24-.47,1.17-.57l.36-.73s-1.14-6.15-1.16-6.33-1.35-.62-1.49-3.49c0,0-.34-1.57-1.25-2s-1-1-1-1a2.8,2.8,0,0,1-1.81-.23,1.77,1.77,0,0,0-.84.69,1.22,1.22,0,0,1-1.47.55,1.14,1.14,0,0,1-.41-1.22s-.58-.55-.45-.79c0,0,.21.25.41.25,0,0-.12-.24-.06-.33s.48.51.7.48.37-.63.37-.63,0-.14-1.49.05c-1.21.16-1.51-1.19-1.51-1.19a2.38,2.38,0,0,1-.36-.64c-.09-.3,1.56-1.58,1.56-1.58a.58.58,0,0,1,0-.39,6.28,6.28,0,0,1,2.9-2.09c.32,0,.48-.06.58-.06s.07-.53.26-.58.5-.19.69,0a1.62,1.62,0,0,1,.29.43s.44-.3.6-.2a.84.84,0,0,1,.25.36s3,.39,3.54.5,3.39,1.48,4.62,2a15.37,15.37,0,0,1,3.17.34c1.3.35,9.74.19,9.74.19s5.05.64,5.73.91,2.82,1,3.36,2.85a19.43,19.43,0,0,1,.73,4.54c0,.62.25,3,1.92,3.83a4.18,4.18,0,0,0,3.66,0c.3-.22,1.21-1.23,1.44-1.35s.72-.73,1.09-.32-.21,1-.21,1A5.91,5.91,0,0,1,648.24,283Z"
                            transform="translate(-7.83 -6)"
                        />
                    </g>
                </svg>
            </div>
        </div>
    )
}