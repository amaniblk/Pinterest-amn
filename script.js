const pinContainer = document.getElementById('pinContainer');

const pins = [
  {
    url: 'https://i.pinimg.com/474x/e7/79/7e/e7797e5154e579479e8748b3285b1fbe.jpg',
    description: ' 𝓢𝓽𝓪𝓻𝓼 ',
  },
  {
    url: 'https://i.pinimg.com/474x/67/3b/aa/673baa346353f68a394ea2297ac5d799.jpg',
    description: '𝓠𝓾𝓸𝓽𝓮.',
  },
  {
    url: 'https://i.pinimg.com/236x/cc/4b/df/cc4bdf53daeda08b84c4ab098f3c221b.jpg',
    description: ' 𝓬𝓾𝓽𝓮 𝓬𝓪𝓽 ',
  },
  {
    url: 'https://i.pinimg.com/474x/50/66/54/5066540e18c1acb1967b8d0f1343b5ba.jpg',
    description: ' 𝓰𝓻𝓮𝔂',
  },
  {
    url: 'https://i.pinimg.com/236x/f8/10/60/f810604aeab3507d20d0f925b5db4d33.jpg',
    description: '𝓰𝓻𝓲𝓼𝓸𝓾',
  },
  {
    url: 'https://i.pinimg.com/236x/c5/47/91/c54791b98192c98e632c519502322aa2.jpg',
    description: ' 𝓫𝓵𝓪𝓬𝓴𝔂 ',
  },
  {
    url: 'https://i.pinimg.com/236x/e5/40/ef/e540ef8bf984078214a76d742d613a07.jpg',
    description: '𝓲𝓷 𝓽𝓱𝓮 𝓷𝓸𝔀𝓱𝓮𝓻𝓮',
  },
  {
    url: 'https://i.pinimg.com/474x/16/ec/2b/16ec2bd97c637137c5089b0335556188.jpg',
    description: '𝓱𝓮𝓱𝓮    ',
  },
  {
    url: 'https://i.pinimg.com/236x/ba/f8/2d/baf82dcf930aecb583b61de6bdb52820.jpg',
    description: '  ',
  },
  {
    url: 'https://i.pinimg.com/236x/cf/ad/57/cfad57fa2796dd3a1ac19c79888245bd.jpg',
    description: '𝓪𝓻𝓬𝓱𝓲𝓽𝓮𝓬𝓽𝓾𝓻𝓮 ',
  },
  {
    url: 'https://i.pinimg.com/236x/be/c5/66/bec566455efb6befd51cfe01174c2592.jpg',
    description: '𝓥    ',
  },
  {
    url: 'https://i.pinimg.com/236x/e3/d5/66/e3d566649766e7e0c88ed89e8d3fb4b7.jpg',
    description: ' 𝓘𝓶 𝓯𝓮𝓮𝓵𝓲𝓷𝓰 𝓫𝓵𝓾𝓮  ',
  },
  {
    url: 'https://i.pinimg.com/236x/c9/28/cf/c928cf2da0bb34bb51695d74a7b9914d.jpg',
    description: '𝓸𝓬𝓮𝓪𝓷 ',
  },
  {
    url: 'https://i.pinimg.com/236x/c1/c0/e3/c1c0e36f0cc4c5b86d31c2eb301bdc34.jpg',
    description: '𝓒𝓵𝓪𝓾𝓭𝓮 𝓶𝓸𝓷𝓮𝓽',
  },
  {
    url: 'https://i.pinimg.com/736x/3d/6e/cc/3d6eccdeacb76a230c6e45bfd27bb3e6.jpg',
    description: '𝓨𝓮𝓸𝓷𝓽𝓪𝓷    ',
  },
];

function createPins() {
  pins.forEach(pin => {
    const pinElement = document.createElement('div');
    pinElement.className = 'pin';
    pinElement.innerHTML = `
      <img src="${pin.url}" alt="Pin Image">
      <div class="pin-content">
        <p>${pin.description}</p>
      </div>
    `;
    pinContainer.appendChild(pinElement);
  });
}

createPins();