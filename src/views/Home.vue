<template>
    <div id="scene"></div>
</template>

<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { onMounted } from 'vue'

onMounted(() => {
    // 创建场景
    let scene = new THREE.Scene()

    // 设置相机
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)

    // 相机定位
    camera.position.set(100, 100, 100)

    // 摄像机朝向指向 场景中心
    camera.lookAt(scene.position)

    // 创建坐标系
    let axes = new THREE.AxesHelper(60)
    scene.add(axes)

    // 点光源
    let point = new THREE.PointLight(0xffffff)
    point.position.set(400, 400, -400)
    scene.add(point)

    let point2 = new THREE.PointLight(0xffffff)
    point2.position.set(-400, -400, 400)
    scene.add(point2)

    let boxGeometry = new THREE.BoxGeometry(40, 40, 40)

    let material = new THREE.MeshLambertMaterial({
        color: '#00ADB5'
    })

    let mesh = new THREE.Mesh(boxGeometry, material)

    scene.add(mesh)

    //----------------------------------------------------------

    // 创建渲染器
    let renderer = new THREE.WebGLRenderer()

    // 设置画面的大小
    renderer.setSize(window.innerWidth, window.innerHeight)

    // 添加到指定的 html 元素上
    document.querySelector('#scene').appendChild(renderer.domElement)

    // 渲染
    renderer.render(scene, camera)

    // 添加控制器
    let orbitControls = new OrbitControls(camera, renderer.domElement)

    // 渲染
    render()
    function render() {
        renderer.render(scene, camera)

        window.requestAnimationFrame(render)
    }

    // 视图大小改变 更新dom大小
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    })

    console.log(THREE)
})
</script>

<style></style>
