import { BrandIcon } from './index.js'

const Logo = {
  render() {
    return `
      <div class="mx-auto w-[50px] h-[50px] tablet:w-[70px] tablet:h-[70px] relative">
        <div class="w-full h-full gradient-primary"
              style=" -webkit-mask: url('${BrandIcon}') no-repeat center / contain;
                      mask: url('${BrandIcon}') no-repeat center / contain;"
        >
        </div>
      </div>
    `
  }
};

export default Logo;

