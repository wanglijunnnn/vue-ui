<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .ivu-layout-sider{
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 260px !important;
        min-width: 260px !important;
        max-width: 260px !important;
        flex: 0 0 260px !important;
    }
    .ivu-layout{
        padding-left: 120px;
    }
    .ivu-menu-vertical.collapsed-menu .ivu-menu-submenu-title .ivu-icon.ivu-menu-submenu-title-icon{
       display: none;
    }
    .content-hd{
        width: 100%;
        height: 200px;
        background-image: linear-gradient(30deg,#5692ff,#f98acd);
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="76" v-model="isCollapsed">
                <div><h1 style="color:#fff; padding: 15px 0px 60px 0;text-align: center;">COLLECT</h1></div>
                <Menu active-name="1-2" :open-names="['1']" theme="dark" width="auto" :class="menuitemClasses">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-analytics" />
                            <span>Components</span>
                        </template>
                        <MenuItem name="1-1">Login</MenuItem>
                        <MenuItem name="1-2">Header</MenuItem>
                        <MenuItem name="1-3">Modal</MenuItem>
                        <MenuItem name="1-4">Search</MenuItem>
                        <MenuItem name="1-5">Dropdown</MenuItem>
                        <MenuItem name="1-6">Footer</MenuItem>
                        <MenuItem name="1-7">Header</MenuItem>
                        <MenuItem name="1-8">Modal</MenuItem>
                        <MenuItem name="1-9">Search</MenuItem>
                        <MenuItem name="1-10">Dropdown</MenuItem>
                        <MenuItem name="1-11">Footer</MenuItem>
                    </Submenu>

                </Menu>
            </Sider>
            <Layout>

                <Content :style="{background: '#fff', minHeight: '760px',borderRadius:'10px'}">
                    <div class="content-hd"></div>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
        }
    }
</script>
