import React from 'react'
import styles from './Sprite.module.scss';
import { spriteHair } from '@/src/interface'

const Curlers: React.FC<spriteHair> = ({ position, color, secondColor }) => {
  return (
    <svg version="1.1" className={styles.sprite} viewBox={`${position.x} ${position.y} 128 32`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
      <rect x="12" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="13" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="14" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="15" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="16" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="17" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="18" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="19" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="76" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="77" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="78" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="79" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="80" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="81" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="82" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="83" y="1" width="1" height="1" fill="#1A1715" />
      <rect x="10" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="11" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="12" y="2" width="1" height="1" fill={color} />
      <rect x="13" y="2" width="1" height="1" fill={color} />
      <rect x="14" y="2" width="1" height="1" fill={color} />
      <rect x="15" y="2" width="1" height="1" fill={color} />
      <rect x="16" y="2" width="1" height="1" fill={color} />
      <rect x="17" y="2" width="1" height="1" fill={color} />
      <rect x="18" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="19" y="2" width="1" height="1" fill={color} />
      <rect x="20" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="44" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="45" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="46" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="47" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="48" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="49" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="50" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="51" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="74" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="75" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="76" y="2" width="1" height="1" fill={color} />
      <rect x="77" y="2" width="1" height="1" fill={color} />
      <rect x="78" y="2" width="1" height="1" fill={color} />
      <rect x="79" y="2" width="1" height="1" fill={color} />
      <rect x="80" y="2" width="1" height="1" fill={color} />
      <rect x="81" y="2" width="1" height="1" fill={color} />
      <rect x="82" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="83" y="2" width="1" height="1" fill={color} />
      <rect x="84" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="108" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="109" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="110" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="111" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="112" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="113" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="114" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="115" y="2" width="1" height="1" fill="#1A1715" />
      <rect x="9" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="10" y="3" width="1" height="1" fill={secondColor} />
      <rect x="11" y="3" width="1" height="1" fill={color} />
      <rect x="12" y="3" width="1" height="1" fill={color} />
      <rect x="13" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="14" y="3" width="1" height="1" fill={secondColor} />
      <rect x="15" y="3" width="1" height="1" fill={color} />
      <rect x="16" y="3" width="1" height="1" fill={color} />
      <rect x="17" y="3" width="1" height="1" fill={color} />
      <rect x="18" y="3" width="1" height="1" fill={color} />
      <rect x="19" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="20" y="3" width="1" height="1" fill={color} />
      <rect x="21" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="42" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="43" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="44" y="3" width="1" height="1" fill={color} />
      <rect x="45" y="3" width="1" height="1" fill={color} />
      <rect x="46" y="3" width="1" height="1" fill={color} />
      <rect x="47" y="3" width="1" height="1" fill={color} />
      <rect x="48" y="3" width="1" height="1" fill={color} />
      <rect x="49" y="3" width="1" height="1" fill={color} />
      <rect x="50" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="51" y="3" width="1" height="1" fill={color} />
      <rect x="52" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="73" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="74" y="3" width="1" height="1" fill={secondColor} />
      <rect x="75" y="3" width="1" height="1" fill={color} />
      <rect x="76" y="3" width="1" height="1" fill={color} />
      <rect x="77" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="78" y="3" width="1" height="1" fill={secondColor} />
      <rect x="79" y="3" width="1" height="1" fill={color} />
      <rect x="80" y="3" width="1" height="1" fill={color} />
      <rect x="81" y="3" width="1" height="1" fill={color} />
      <rect x="82" y="3" width="1" height="1" fill={color} />
      <rect x="83" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="84" y="3" width="1" height="1" fill={color} />
      <rect x="85" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="106" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="107" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="108" y="3" width="1" height="1" fill={color} />
      <rect x="109" y="3" width="1" height="1" fill={color} />
      <rect x="110" y="3" width="1" height="1" fill={color} />
      <rect x="111" y="3" width="1" height="1" fill={color} />
      <rect x="112" y="3" width="1" height="1" fill={color} />
      <rect x="113" y="3" width="1" height="1" fill={color} />
      <rect x="114" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="115" y="3" width="1" height="1" fill={color} />
      <rect x="116" y="3" width="1" height="1" fill="#1A1715" />
      <rect x="8" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="9" y="4" width="1" height="1" fill={secondColor} />
      <rect x="10" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="11" y="4" width="1" height="1" fill={color} />
      <rect x="12" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="13" y="4" width="1" height="1" fill={secondColor} />
      <rect x="14" y="4" width="1" height="1" fill={color} />
      <rect x="15" y="4" width="1" height="1" fill={color} />
      <rect x="16" y="4" width="1" height="1" fill={color} />
      <rect x="17" y="4" width="1" height="1" fill={secondColor} />
      <rect x="18" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="19" y="4" width="1" height="1" fill={color} />
      <rect x="20" y="4" width="1" height="1" fill={color} />
      <rect x="21" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="41" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="42" y="4" width="1" height="1" fill={secondColor} />
      <rect x="43" y="4" width="1" height="1" fill={color} />
      <rect x="44" y="4" width="1" height="1" fill={color} />
      <rect x="45" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="46" y="4" width="1" height="1" fill={secondColor} />
      <rect x="47" y="4" width="1" height="1" fill={color} />
      <rect x="48" y="4" width="1" height="1" fill={color} />
      <rect x="49" y="4" width="1" height="1" fill={color} />
      <rect x="50" y="4" width="1" height="1" fill={color} />
      <rect x="51" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="52" y="4" width="1" height="1" fill={color} />
      <rect x="53" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="72" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="73" y="4" width="1" height="1" fill={secondColor} />
      <rect x="74" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="75" y="4" width="1" height="1" fill={color} />
      <rect x="76" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="77" y="4" width="1" height="1" fill={secondColor} />
      <rect x="78" y="4" width="1" height="1" fill={color} />
      <rect x="79" y="4" width="1" height="1" fill={color} />
      <rect x="80" y="4" width="1" height="1" fill={color} />
      <rect x="81" y="4" width="1" height="1" fill={secondColor} />
      <rect x="82" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="83" y="4" width="1" height="1" fill={color} />
      <rect x="84" y="4" width="1" height="1" fill={color} />
      <rect x="85" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="105" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="106" y="4" width="1" height="1" fill={secondColor} />
      <rect x="107" y="4" width="1" height="1" fill={color} />
      <rect x="108" y="4" width="1" height="1" fill={color} />
      <rect x="109" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="110" y="4" width="1" height="1" fill={secondColor} />
      <rect x="111" y="4" width="1" height="1" fill={color} />
      <rect x="112" y="4" width="1" height="1" fill={color} />
      <rect x="113" y="4" width="1" height="1" fill={color} />
      <rect x="114" y="4" width="1" height="1" fill={color} />
      <rect x="115" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="116" y="4" width="1" height="1" fill={color} />
      <rect x="117" y="4" width="1" height="1" fill="#1A1715" />
      <rect x="7" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="8" y="5" width="1" height="1" fill={secondColor} />
      <rect x="9" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="10" y="5" width="1" height="1" fill={secondColor} />
      <rect x="11" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="12" y="5" width="1" height="1" fill={color} />
      <rect x="13" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="14" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="15" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="16" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="17" y="5" width="1" height="1" fill={color} />
      <rect x="18" y="5" width="1" height="1" fill={secondColor} />
      <rect x="19" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="20" y="5" width="1" height="1" fill={color} />
      <rect x="21" y="5" width="1" height="1" fill={color} />
      <rect x="22" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="40" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="41" y="5" width="1" height="1" fill={secondColor} />
      <rect x="42" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="43" y="5" width="1" height="1" fill={color} />
      <rect x="44" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="45" y="5" width="1" height="1" fill={secondColor} />
      <rect x="46" y="5" width="1" height="1" fill={color} />
      <rect x="47" y="5" width="1" height="1" fill={color} />
      <rect x="48" y="5" width="1" height="1" fill={color} />
      <rect x="49" y="5" width="1" height="1" fill={secondColor} />
      <rect x="50" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="51" y="5" width="1" height="1" fill={color} />
      <rect x="52" y="5" width="1" height="1" fill={color} />
      <rect x="53" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="71" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="72" y="5" width="1" height="1" fill={secondColor} />
      <rect x="73" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="74" y="5" width="1" height="1" fill={secondColor} />
      <rect x="75" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="76" y="5" width="1" height="1" fill={color} />
      <rect x="77" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="78" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="79" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="80" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="81" y="5" width="1" height="1" fill={color} />
      <rect x="82" y="5" width="1" height="1" fill={secondColor} />
      <rect x="83" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="84" y="5" width="1" height="1" fill={color} />
      <rect x="85" y="5" width="1" height="1" fill={color} />
      <rect x="86" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="104" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="105" y="5" width="1" height="1" fill={secondColor} />
      <rect x="106" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="107" y="5" width="1" height="1" fill={color} />
      <rect x="108" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="109" y="5" width="1" height="1" fill={secondColor} />
      <rect x="110" y="5" width="1" height="1" fill={color} />
      <rect x="111" y="5" width="1" height="1" fill={color} />
      <rect x="112" y="5" width="1" height="1" fill={color} />
      <rect x="113" y="5" width="1" height="1" fill={secondColor} />
      <rect x="114" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="115" y="5" width="1" height="1" fill={color} />
      <rect x="116" y="5" width="1" height="1" fill={color} />
      <rect x="117" y="5" width="1" height="1" fill="#1A1715" />
      <rect x="7" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="8" y="6" width="1" height="1" fill={secondColor} />
      <rect x="9" y="6" width="1" height="1" fill={color} />
      <rect x="10" y="6" width="1" height="1" fill={color} />
      <rect x="11" y="6" width="1" height="1" fill={secondColor} />
      <rect x="12" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="13" y="6" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="17" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="18" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="19" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="20" y="6" width="1" height="1" fill={color} />
      <rect x="21" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="22" y="6" width="1" height="1" fill={color} />
      <rect x="23" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="39" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="40" y="6" width="1" height="1" fill={secondColor} />
      <rect x="41" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="42" y="6" width="1" height="1" fill={secondColor} />
      <rect x="43" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="44" y="6" width="1" height="1" fill={color} />
      <rect x="45" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="46" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="47" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="48" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="49" y="6" width="1" height="1" fill={color} />
      <rect x="50" y="6" width="1" height="1" fill={secondColor} />
      <rect x="51" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="52" y="6" width="1" height="1" fill={color} />
      <rect x="53" y="6" width="1" height="1" fill={color} />
      <rect x="54" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="71" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="72" y="6" width="1" height="1" fill={secondColor} />
      <rect x="73" y="6" width="1" height="1" fill={color} />
      <rect x="74" y="6" width="1" height="1" fill={color} />
      <rect x="75" y="6" width="1" height="1" fill={secondColor} />
      <rect x="76" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="77" y="6" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="81" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="82" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="83" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="84" y="6" width="1" height="1" fill={color} />
      <rect x="85" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="86" y="6" width="1" height="1" fill={color} />
      <rect x="87" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="103" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="104" y="6" width="1" height="1" fill={secondColor} />
      <rect x="105" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="106" y="6" width="1" height="1" fill={secondColor} />
      <rect x="107" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="108" y="6" width="1" height="1" fill={color} />
      <rect x="109" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="110" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="111" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="112" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="113" y="6" width="1" height="1" fill={color} />
      <rect x="114" y="6" width="1" height="1" fill={secondColor} />
      <rect x="115" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="116" y="6" width="1" height="1" fill={color} />
      <rect x="117" y="6" width="1" height="1" fill={color} />
      <rect x="118" y="6" width="1" height="1" fill="#1A1715" />
      <rect x="7" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="8" y="7" width="1" height="1" fill={secondColor} />
      <rect x="9" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="10" y="7" width="1" height="1" fill={color} />
      <rect x="11" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="12" y="7" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="19" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="20" y="7" width="1" height="1" fill={color} />
      <rect x="21" y="7" width="1" height="1" fill={color} />
      <rect x="22" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="23" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="39" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="40" y="7" width="1" height="1" fill={secondColor} />
      <rect x="41" y="7" width="1" height="1" fill={color} />
      <rect x="42" y="7" width="1" height="1" fill={color} />
      <rect x="43" y="7" width="1" height="1" fill={secondColor} />
      <rect x="44" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="45" y="7" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="49" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="50" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="51" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="52" y="7" width="1" height="1" fill={color} />
      <rect x="53" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="54" y="7" width="1" height="1" fill={color} />
      <rect x="55" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="71" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="72" y="7" width="1" height="1" fill={secondColor} />
      <rect x="73" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="74" y="7" width="1" height="1" fill={color} />
      <rect x="75" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="76" y="7" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="83" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="84" y="7" width="1" height="1" fill={color} />
      <rect x="85" y="7" width="1" height="1" fill={color} />
      <rect x="86" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="87" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="103" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="104" y="7" width="1" height="1" fill={secondColor} />
      <rect x="105" y="7" width="1" height="1" fill={color} />
      <rect x="106" y="7" width="1" height="1" fill={color} />
      <rect x="107" y="7" width="1" height="1" fill={secondColor} />
      <rect x="108" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="109" y="7" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="113" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="114" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="115" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="116" y="7" width="1" height="1" fill={color} />
      <rect x="117" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="118" y="7" width="1" height="1" fill={color} />
      <rect x="119" y="7" width="1" height="1" fill="#1A1715" />
      <rect x="7" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="8" y="8" width="1" height="1" fill={secondColor} />
      <rect x="9" y="8" width="1" height="1" fill={color} />
      <rect x="10" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="11" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="12" y="8" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="20" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="21" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="22" y="8" width="1" height="1" fill={color} />
      <rect x="23" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="39" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="40" y="8" width="1" height="1" fill={secondColor} />
      <rect x="41" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="42" y="8" width="1" height="1" fill={color} />
      <rect x="43" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="44" y="8" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="51" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="52" y="8" width="1" height="1" fill={color} />
      <rect x="53" y="8" width="1" height="1" fill={color} />
      <rect x="54" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="55" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="71" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="72" y="8" width="1" height="1" fill={secondColor} />
      <rect x="73" y="8" width="1" height="1" fill={color} />
      <rect x="74" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="75" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="76" y="8" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="84" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="85" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="86" y="8" width="1" height="1" fill={color} />
      <rect x="87" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="103" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="104" y="8" width="1" height="1" fill={secondColor} />
      <rect x="105" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="106" y="8" width="1" height="1" fill={color} />
      <rect x="107" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="108" y="8" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="115" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="116" y="8" width="1" height="1" fill={color} />
      <rect x="117" y="8" width="1" height="1" fill={color} />
      <rect x="118" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="119" y="8" width="1" height="1" fill="#1A1715" />
      <rect x="7" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="8" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="9" y="9" width="1" height="1" fill={color} />
      <rect x="10" y="9" width="1" height="1" fill={secondColor} />
      <rect x="11" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="12" y="9" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="20" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="21" y="9" width="1" height="1" fill={color} />
      <rect x="22" y="9" width="1" height="1" fill={color} />
      <rect x="23" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="39" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="40" y="9" width="1" height="1" fill={secondColor} />
      <rect x="41" y="9" width="1" height="1" fill={color} />
      <rect x="42" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="43" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="44" y="9" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="52" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="53" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="54" y="9" width="1" height="1" fill={color} />
      <rect x="55" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="71" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="72" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="73" y="9" width="1" height="1" fill={color} />
      <rect x="74" y="9" width="1" height="1" fill={secondColor} />
      <rect x="75" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="76" y="9" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="84" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="85" y="9" width="1" height="1" fill={color} />
      <rect x="86" y="9" width="1" height="1" fill={color} />
      <rect x="87" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="103" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="104" y="9" width="1" height="1" fill={secondColor} />
      <rect x="105" y="9" width="1" height="1" fill={color} />
      <rect x="106" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="107" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="108" y="9" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="116" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="117" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="118" y="9" width="1" height="1" fill={color} />
      <rect x="119" y="9" width="1" height="1" fill="#1A1715" />
      <rect x="7" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="8" y="10" width="1" height="1" fill={secondColor} />
      <rect x="9" y="10" width="1" height="1" fill={secondColor} />
      <rect x="10" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="11" y="10" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="20" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="21" y="10" width="1" height="1" fill={color} />
      <rect x="22" y="10" width="1" height="1" fill={secondColor} />
      <rect x="23" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="39" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="40" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="41" y="10" width="1" height="1" fill={color} />
      <rect x="42" y="10" width="1" height="1" fill={secondColor} />
      <rect x="43" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="44" y="10" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="52" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="53" y="10" width="1" height="1" fill={color} />
      <rect x="54" y="10" width="1" height="1" fill={color} />
      <rect x="55" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="71" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="72" y="10" width="1" height="1" fill={secondColor} />
      <rect x="73" y="10" width="1" height="1" fill={secondColor} />
      <rect x="74" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="75" y="10" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="84" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="85" y="10" width="1" height="1" fill={color} />
      <rect x="86" y="10" width="1" height="1" fill={secondColor} />
      <rect x="87" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="103" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="104" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="105" y="10" width="1" height="1" fill={color} />
      <rect x="106" y="10" width="1" height="1" fill={secondColor} />
      <rect x="107" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="108" y="10" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="116" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="117" y="10" width="1" height="1" fill={color} />
      <rect x="118" y="10" width="1" height="1" fill={color} />
      <rect x="119" y="10" width="1" height="1" fill="#1A1715" />
      <rect x="8" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="9" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="10" y="11" width="1" height="1" fill={secondColor} />
      <rect x="11" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="12" y="11" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="20" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="21" y="11" width="1" height="1" fill={secondColor} />
      <rect x="22" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="39" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="40" y="11" width="1" height="1" fill={secondColor} />
      <rect x="41" y="11" width="1" height="1" fill={secondColor} />
      <rect x="42" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="43" y="11" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="52" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="53" y="11" width="1" height="1" fill={color} />
      <rect x="54" y="11" width="1" height="1" fill={secondColor} />
      <rect x="55" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="72" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="73" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="74" y="11" width="1" height="1" fill={secondColor} />
      <rect x="75" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="76" y="11" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="84" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="85" y="11" width="1" height="1" fill={secondColor} />
      <rect x="86" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="103" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="104" y="11" width="1" height="1" fill={secondColor} />
      <rect x="105" y="11" width="1" height="1" fill={secondColor} />
      <rect x="106" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="107" y="11" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="116" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="117" y="11" width="1" height="1" fill={color} />
      <rect x="118" y="11" width="1" height="1" fill={secondColor} />
      <rect x="119" y="11" width="1" height="1" fill="#1A1715" />
      <rect x="10" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="11" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="12" y="12" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="20" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="21" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="40" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="41" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="42" y="12" width="1" height="1" fill={secondColor} />
      <rect x="43" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="44" y="12" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="52" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="53" y="12" width="1" height="1" fill={secondColor} />
      <rect x="54" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="74" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="75" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="76" y="12" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="84" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="85" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="104" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="105" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="106" y="12" width="1" height="1" fill={secondColor} />
      <rect x="107" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="108" y="12" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="116" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="117" y="12" width="1" height="1" fill={secondColor} />
      <rect x="118" y="12" width="1" height="1" fill="#1A1715" />
      <rect x="12" y="13" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="42" y="13" width="1" height="1" fill="#1A1715" />
      <rect x="43" y="13" width="1" height="1" fill="#1A1715" />
      <rect x="44" y="13" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="52" y="13" width="1" height="1" fill="#1A1715" />
      <rect x="53" y="13" width="1" height="1" fill="#1A1715" />
      <rect x="76" y="13" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="106" y="13" width="1" height="1" fill="#1A1715" />
      <rect x="107" y="13" width="1" height="1" fill="#1A1715" />
      <rect x="108" y="13" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="116" y="13" width="1" height="1" fill="#1A1715" />
      <rect x="117" y="13" width="1" height="1" fill="#1A1715" />
      <rect x="44" y="14" width="1" height="1" fill="#000000" opacity="0.356863" />
      <rect x="108" y="14" width="1" height="1" fill="#000000" opacity="0.356863" />
    </svg>
  )
}

export default Curlers