-- 更新地图图片为 IGN 官方截图
-- R2 公开访问地址前缀
DEFINE VARIABLE r2_prefix = 'https://pub-42f70497cda741b99d02e6434a897ec1.r2.dev/maps';

-- Backrooms
UPDATE maps SET image_url = '$r2_prefix/backrooms-chairs.jpg' WHERE slug = 'backrooms';

-- Hide-and-Seek Mansion
UPDATE maps SET image_url = '$r2_prefix/mansion-ballroom.jpg' WHERE slug = 'hide-and-seek-mansion';

-- Indoor Country
UPDATE maps SET image_url = '$r2_prefix/country-cow.jpg' WHERE slug = 'indoor-country';

-- Osaka
UPDATE maps SET image_url = '$r2_prefix/osaka-open.jpg' WHERE slug = 'osaka';

-- Penguin Hotel
UPDATE maps SET image_url = '$r2_prefix/penguin-ballroom.jpg' WHERE slug = 'penguin-hotel';

-- Sewer
UPDATE maps SET image_url = '$r2_prefix/sewer-center.jpg' WHERE slug = 'sewer';

-- Sugar Land
UPDATE maps SET image_url = '$r2_prefix/candy-houses.jpg' WHERE slug = 'sugar-land';
